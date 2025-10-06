"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./Payment.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { motion, LayoutGroup } from "framer-motion";

/**
 * cSpell: If your spell-check flags 'ghipps' or 'Paystack', add them to cspell.json or use:
 * // cSpell:ignore ghipps Paystack paystack ApplePay
 */

type InitializeResponse = {
  status: boolean;
  message?: string;
  data?: {
    authorization_url?: string;
    access_code?: string;
    reference?: string;
  };
};

type MethodId = "card" | "mobile_money" | "apple_pay" | "bank";

const BASE_METHODS: { id: MethodId; title: string; icons: string[] }[] = [
  {
    id: "mobile_money",
    title: "MoMo",
    icons: ["/mtnLogo.png", "/telecelLogo.jpg", "/atLogo.jpg"],
  },
  {
    id: "card",
    title: "Card",
    icons: ["/visaLogo.png", "/masterCardLogo.png"],
  },
  { id: "bank", title: "Bank Transfer", icons: ["/bank.jpg"] },
  { id: "apple_pay", title: "Apple Pay", icons: ["/applePay.png"] },
];

const DEFAULT_CURRENCY = "GHS";
const emailIsValid = (s = "") => /\S+@\S+\.\S+/.test(s);
const normalizePhone = (p = "") => p.replace(/[^\d+]/g, "");

type RuntimeMethod = {
  id: MethodId;
  title: string;
  icons: string[];
  disabled: boolean;
  reason?: string;
};

export default function Payment({ change = false }: { change?: boolean }) {
  const cartData = useSelector((s: RootState) => s.cart);
  const totalPrice = Number(cartData?.totalPrice ?? 0);

  const [selected, setSelected] = useState<MethodId>("mobile_money");
  const [methodsOrder, setMethodsOrder] = useState<MethodId[]>(
    BASE_METHODS.map((m) => m.id)
  );
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currency = DEFAULT_CURRENCY;
  const amountInSubunits = useMemo(
    () => Math.round((totalPrice + 100) * 100),
    [totalPrice]
  );

  // runtime Apple Pay detection (avoid referencing ApplePaySession global type)
  const [applePayAvailable, setApplePayAvailable] = useState<boolean | null>(
    null
  );
  useEffect(() => {
    let mounted = true;
    async function detectApplePay() {
      if (typeof window === "undefined") {
        if (mounted) setApplePayAvailable(false);
        return;
      }

      // use any typed binding to avoid TS global type complaints
      const ApplePaySessionAny: any = (window as any).ApplePaySession;
      if (!ApplePaySessionAny) {
        if (mounted) setApplePayAvailable(false);
        return;
      }

      try {
        const maybe = ApplePaySessionAny.canMakePayments;
        if (typeof maybe === "function") {
          const result = maybe.call(ApplePaySessionAny);
          if (result && typeof result.then === "function") {
            const resolved = await result;
            if (mounted) setApplePayAvailable(Boolean(resolved));
          } else {
            if (mounted) setApplePayAvailable(Boolean(result));
          }
        } else {
          if (mounted) setApplePayAvailable(true);
        }
      } catch {
        if (mounted) setApplePayAvailable(false);
      }
    }

    detectApplePay();
    return () => {
      mounted = false;
    };
  }, []);

  // Build runtime methods: bank is ENABLED now; apple_pay depends on detection
  const methods: RuntimeMethod[] = useMemo(() => {
    return BASE_METHODS.map((m) => {
      if (m.id === "apple_pay") {
        const disabled = applePayAvailable === false;
        return {
          ...m,
          disabled,
          reason: disabled
            ? "Apple Pay is available only in Safari on Apple devices"
            : undefined,
        };
      }
      // bank is enabled (Paystack supports bank transfer in Ghana per their message)
      return { ...m, disabled: false };
    });
  }, [applePayAvailable]);

  // ensure selected is always enabled and keep ordering consistent
  useEffect(() => {
    const meta = methods.find((m) => m.id === selected);
    if (meta?.disabled) {
      const firstEnabled = methods.find((m) => !m.disabled);
      if (firstEnabled) {
        setSelected(firstEnabled.id);
        setMethodsOrder((prev) => [
          firstEnabled.id,
          ...prev.filter((x) => x !== firstEnabled.id),
        ]);
      }
    }

    setMethodsOrder((prev) => {
      const methodIds = methods.map((m) => m.id);
      const merged = [
        ...prev.filter((id) => methodIds.includes(id)),
        ...methodIds.filter((id) => !prev.includes(id)),
      ];
      return Array.from(new Set(merged));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applePayAvailable]);

  const getChannelsFor = useCallback(
    (method: MethodId) => {
      switch (method) {
        case "card":
          return ["card"];
        case "mobile_money":
          return ["mobile_money"];
        case "apple_pay":
          return ["apple_pay"];
        case "bank":
          // keep mapping to ghipps for GHS (your server maps/accepts ghipps)
          return ["bank_transfer"];
        default:
          return undefined;
      }
    },
    [currency]
  );

  const moveSelection = useCallback(
    (dir: -1 | 1) => {
      const enabledOrder = methodsOrder.filter(
        (id) => !methods.find((m) => m.id === id)?.disabled
      );
      const idx = enabledOrder.indexOf(selected);
      if (idx === -1) return;
      const next =
        enabledOrder[(idx + dir + enabledOrder.length) % enabledOrder.length];
      setSelected(next);
      setMethodsOrder((prev) =>
        prev[0] === next ? prev : [next, ...prev.filter((x) => x !== next)]
      );
    },
    [methodsOrder, methods, selected]
  );

  const handleSelect = useCallback(
    (id: MethodId) => {
      const meta = methods.find((m) => m.id === id);
      if (!meta || meta.disabled) return;
      if (id === selected) return;
      setSelected(id);
      setMethodsOrder((prev) =>
        prev[0] === id ? prev : [id, ...prev.filter((x) => x !== id)]
      );
      setError(null);
    },
    [methods, selected]
  );

  // inside your Payment.tsx component, replace previous handlePay with this:

  const handlePay = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      setError(null);

      // guard
      const selectedMeta = methods.find((m) => m.id === selected);
      if (selectedMeta?.disabled) {
        setError(selectedMeta.reason || "Selected method is not available");
        return;
      }
      if (!email || !emailIsValid(email)) {
        setError("Please enter a valid email.");
        return;
      }
      if (selected === "mobile_money" && !normalizePhone(phone)) {
        setError("Please enter a valid mobile number for Mobile Money.");
        return;
      }

      setLoading(true);
      const controller = new AbortController();
      const signal = controller.signal;
      const timeout = setTimeout(() => controller.abort(), 30000);

      try {
        const channels = getChannelsFor(selected);
        const payloadBase: any = {
          email,
          amount: amountInSubunits,
          currency,
          metadata: { cartTotal: totalPrice },
        };
        if (selected === "mobile_money")
          payloadBase.phone = normalizePhone(phone);
        if (channels) payloadBase.channels = channels;

        // helper to call our initialize API and parse JSON safely
        async function initWithBody(body: any) {
          const res = await fetch("/api/paystack/initialize", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            signal,
          });
          const text = await res.text().catch(() => "");
          let json: any = null;
          try {
            json = text ? JSON.parse(text) : null;
          } catch {
            json = text || null;
          }
          return { ok: res.ok, status: res.status, body: json };
        }

        // 1) Try with the requested channels first
        let initResp = await initWithBody(payloadBase);

        // If Paystack says "No active channel" (or similar), retry without channels
        const msg = (initResp.body?.message || "").toString().toLowerCase();
        if (
          !initResp.ok &&
          /no active channel|no active channels|no available channel/.test(msg)
        ) {
          // Retry without channels so Paystack can pick an available method or give clearer error
          const fallbackBody = { ...payloadBase };
          delete fallbackBody.channels;
          initResp = await initWithBody(fallbackBody);

          if (!initResp.ok) {
            // still failing — surface Paystack message and suggest merchant action
            setError(
              initResp.body?.message ||
                "Payment channel unavailable. Please contact the merchant to enable Bank Transfer or try another payment method."
            );
            return;
          }
        }

        if (!initResp.ok) {
          // generic handling for other failures
          setError(
            initResp.body?.message ||
              `Initialization failed (${initResp.status})`
          );
          return;
        }

        const body = initResp.body;
        if (!body?.status) {
          setError(body?.message || JSON.stringify(body));
          return;
        }

        // success: handle access_code or authorization_url
        const accessCode = body.data?.access_code;
        const authorizationUrl = body.data?.authorization_url;

        const { default: PaystackPop } = await import("@paystack/inline-js");
        const popup = new PaystackPop();

        if (accessCode) {
          popup.resumeTransaction(accessCode);
        } else if (authorizationUrl) {
          // If Paystack returned bank account details in data (for bank transfer),
          // you might want to display them instead of redirecting; this keeps your existing redirect behavior.
          window.location.href = authorizationUrl;
        } else {
          setError("Paystack did not return an authorization method.");
        }
      } catch (err: any) {
        if (err?.name === "AbortError")
          setError("Request timed out. Please try again.");
        else setError(err?.message || "Payment initialization failed");
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    },
    [
      amountInSubunits,
      currency,
      email,
      getChannelsFor,
      methods,
      phone,
      selected,
      totalPrice,
    ]
  );

  const makeKeyDown = useCallback(
    (methodId: MethodId) => (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(methodId);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        moveSelection(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        moveSelection(-1);
      }
    },
    [handleSelect, moveSelection]
  );

  const methodMetaById = useMemo(
    () => Object.fromEntries(methods.map((m) => [m.id, m])),
    [methods]
  );

  const payDisabled =
    loading ||
    !emailIsValid(email) ||
    (selected === "mobile_money" && !normalizePhone(phone)) ||
    Boolean(methodMetaById[selected]?.disabled);

  return (
    <section className={styles.payment}>
      <h2>{change ? "Change Payment Method" : "PAYMENT"}</h2>

      <form onSubmit={handlePay} className={styles.paymentDetails}>
        <LayoutGroup>
          <div
            className={styles.methodGrid}
            role="list"
            aria-label="Payment methods"
          >
            {methodsOrder.map((methodId) => {
              const meta = BASE_METHODS.find((m) => m.id === methodId)!;
              const info = methodMetaById[methodId] as
                | RuntimeMethod
                | undefined;
              const isSelected = selected === methodId;
              const disabled = !!info?.disabled;
              return (
                <motion.div
                  key={methodId}
                  layout
                  layoutId={methodId}
                  role="listitem"
                  aria-pressed={isSelected}
                  tabIndex={disabled ? -1 : 0}
                  onKeyDown={makeKeyDown(methodId)}
                  className={`${styles.methodCard} ${
                    isSelected ? styles.selected : ""
                  } ${disabled ? styles.disabled : ""}`}
                  onClick={() => handleSelect(methodId)}
                  whileHover={!disabled ? { scale: 1.02 } : undefined}
                  transition={{
                    layout: { duration: 0.36, ease: [0.2, 0.9, 0.3, 1] },
                  }}
                  aria-disabled={disabled}
                >
                  <div className={styles.cardRow} aria-hidden={disabled}>
                    <div className={styles.imgRow}>
                      {meta.icons.map((src, i) => (
                        <div key={src + i} className={styles.imgBox}>
                          <Image
                            src={src}
                            alt={meta.title + " logo"}
                            width={28}
                            height={18}
                            className={styles.img}
                          />
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4>{meta.title}</h4>
                    </div>
                  </div>

                  {info?.disabled && (
                    <span className={styles.badge} aria-hidden>
                      {info.reason ?? "Soon"}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </LayoutGroup>

        <div className={styles.inputBox}>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            inputMode="email"
            autoComplete="email"
          />

          {selected === "mobile_money" && (
            <div className={styles.inputBox}>
              <label htmlFor="phone">Mobile number</label>
              <input
                className={styles.input}
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="024xxxxxxxx"
                inputMode="tel"
              />
            </div>
          )}

          <div className={styles.summary}>
            <div>
              <span>Items</span>
              <span>GH₵ {totalPrice.toFixed(2)}</span>
            </div>
            <div>
              <span>Delivery</span>
              <span>GH₵ 100.00</span>
            </div>
            <div className={styles.total}>
              <strong>Total</strong>
              <strong>GH₵ {(totalPrice + 100).toFixed(2)}</strong>
            </div>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button
            className={styles.payButton}
            type="submit"
            disabled={payDisabled}
          >
            {loading
              ? "Processing…"
              : `Pay GH₵ ${(totalPrice + 100).toFixed(2)}`}
          </button>

          {methodMetaById[selected]?.disabled && (
            <p className={styles.disabledNote} aria-live="polite">
              {(methodMetaById[selected] as RuntimeMethod).reason}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
