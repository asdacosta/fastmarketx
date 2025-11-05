import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./CardsBox.module.css";
import Image from "next/image";
import Link from "next/link";
import Ad from "./Ad/Ad";
import { useDispatch } from "react-redux";
import { setMenu } from "@/app/redux/slices/MenuUiSlice";

function DoubleBufferedLoop({
  videos,
  className = "",
}: {
  videos: string[];
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeBuffer, setActiveBuffer] = useState<0 | 1>(0);
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];
  const preloaded = useRef<Record<number, string>>({});
  const TRANSITION_MS = 600;

  /** Preload a video as a blob but do NOT play it */
  const preloadVideo = useCallback(
    async (index: number) => {
      const src = videos[index];
      if (!src || preloaded.current[index]) return preloaded.current[index];

      try {
        const resp = await fetch(src, { cache: "force-cache" });
        if (!resp.ok) throw new Error(`Failed to fetch ${src}`);
        const blob = await resp.blob();
        const url = URL.createObjectURL(blob);
        preloaded.current[index] = url;
        return url;
      } catch (err) {
        console.error("Video preload failed:", err);
        return null;
      }
    },
    [videos]
  );

  /** Load a preloaded blob into a buffer video element */
  const loadIntoBuffer = useCallback(
    async (index: number, bufferId: 0 | 1) => {
      const vidEl = videoRefs[bufferId].current;
      if (!vidEl) return;
      const blobUrl = preloaded.current[index] || (await preloadVideo(index));
      if (blobUrl) {
        vidEl.src = blobUrl;
        await vidEl.load();
      }
    },
    [preloadVideo]
  );

  /** Start playing the current buffer */
  const playBuffer = useCallback(async (bufferId: 0 | 1) => {
    const vidEl = videoRefs[bufferId].current;
    if (!vidEl) return;
    try {
      await vidEl.play();
    } catch (e) {
      console.warn("Autoplay blocked:", e);
    }
  }, []);

  /** On mount: preload first two videos and start playing the first */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      await preloadVideo(currentIndex);
      await loadIntoBuffer(currentIndex, activeBuffer);
      await preloadVideo((currentIndex + 1) % videos.length);
      if (!cancelled) await playBuffer(activeBuffer);
    })();
    return () => {
      cancelled = true;
    };
  }, [
    currentIndex,
    activeBuffer,
    loadIntoBuffer,
    preloadVideo,
    playBuffer,
    videos.length,
  ]);

  /** Handle when current video ends */
  useEffect(() => {
    const activeVid = videoRefs[activeBuffer].current;
    if (!activeVid) return;

    const handleEnded = async () => {
      const nextIndex = (currentIndex + 1) % videos.length;
      const nextBuffer: 0 | 1 = activeBuffer === 0 ? 1 : 0;

      // preload + load next video
      await preloadVideo(nextIndex);
      await loadIntoBuffer(nextIndex, nextBuffer);

      // Crossfade start
      setActiveBuffer(nextBuffer);
      await playBuffer(nextBuffer);

      // Wait for fade duration then switch index
      setTimeout(() => {
        setCurrentIndex(nextIndex);
      }, TRANSITION_MS);
    };

    activeVid.addEventListener("ended", handleEnded);
    return () => activeVid.removeEventListener("ended", handleEnded);
  }, [
    activeBuffer,
    currentIndex,
    loadIntoBuffer,
    playBuffer,
    preloadVideo,
    videos.length,
  ]);

  /** Cleanup all blob URLs */
  useEffect(() => {
    return () => {
      Object.values(preloaded.current).forEach((url) => {
        try {
          URL.revokeObjectURL(url);
        } catch {}
      });
      preloaded.current = {};
    };
  }, []);

  return (
    <div className={`${styles.videoContainer} ${className}`}>
      <div
        className={`${styles.videoLayer} ${
          activeBuffer === 0 ? styles.active : ""
        }`}
      >
        <video
          ref={videoRefs[0]}
          muted
          playsInline
          preload="auto"
          className={styles.videoElement}
        />
      </div>
      <div
        className={`${styles.videoLayer} ${
          activeBuffer === 1 ? styles.active : ""
        }`}
      >
        <video
          ref={videoRefs[1]}
          muted
          playsInline
          preload="auto"
          className={styles.videoElement}
        />
      </div>
    </div>
  );
}

function CardsBox() {
  const menuDispatch = useDispatch();

  const productsVideos = [
    "/explore-products/ac-fan-tv.mp4",
    "/explore-products/activewear.mp4",
    "/explore-products/alcohol.mp4",
    "/explore-products/backpacks.mp4",
    "/explore-products/bedding-towels-bathroom-essentials.mp4",
    "/explore-products/chocolates-cookies.mp4",
    "/explore-products/cookware-dining-sets.mp4",
    "/explore-products/dairy-eggs.mp4",
    "/explore-products/fitness-equipments.mp4",
    "/explore-products/fridge-microwave-blender.mp4",
    "/explore-products/game-consoles.mp4",
    "/explore-products/handbags-clutches.mp4",
    "/explore-products/headphones.mp4",
    "/explore-products/heels-flats.mp4",
    "/explore-products/hoodies-jackets.mp4",
    "/explore-products/jewelry.mp4",
    "/explore-products/keyboard-mice-pen-drive.mp4",
    "/explore-products/laptops-tablets.mp4",
    "/explore-products/meat-seafood.mp4",
    "/explore-products/men-denim-jeans.mp4",
    "/explore-products/men-underwear.mp4",
    "/explore-products/pants-trousers.mp4",
    "/explore-products/personal-care.mp4",
    "/explore-products/phone-accessories.mp4",
    "/explore-products/phones.mp4",
    "/explore-products/rice-canned-food-oil.mp4",
    "/explore-products/puzzle-games.mp4",
    "/explore-products/slides.mp4",
    "/explore-products/sneakers.mp4",
    "/explore-products/soda-drinks-water.mp4",
    "/explore-products/speaker-camera-modem.mp4",
    "/explore-products/stationery-calculator.mp4",
    "/explore-products/stove-washing-machine-iron-ai.mp4",
    "/explore-products/tops-blouses-skirts.mp4",
    "/explore-products/veggies-fruits.mp4",
    "/explore-products/wall-art-curtains-rugs-lighting-ai.mp4",
    "/explore-products/watches-wallets.mp4",
    "/explore-products/women-denim-jeans.mp4",
    "/explore-products/women-underwear.mp4",
    "/explore-products/wrapping-painting-drawing-tools.mp4",
  ];

  const mealsVideos = [
    "/order-meals/bbq.mp4",
    "/order-meals/breads.mp4",
    "/order-meals/burgers.mp4",
    "/order-meals/coffee-tea.mp4",
    "/order-meals/grains-porridge.mp4",
    "/order-meals/ice-cream.mp4",
    "/order-meals/indomie-spaghetti.mp4",
    "/order-meals/meal-kits.mp4",
    "/order-meals/meal-prep-subscriptions.mp4",
    "/order-meals/pastries.mp4",
    "/order-meals/pizza.mp4",
    "/order-meals/salads-sandwich-wraps.mp4",
    "/order-meals/shawarma.mp4",
    "/order-meals/smoothies-juices.mp4",
    "/order-meals/snacks.mp4",
    "/order-meals/stews-soups.mp4",
    "/order-meals/vegetarian.mp4",
  ];

  const servicesVideos = [
    "/discover-services/carpentry.mp4",
    "/discover-services/cleaning.mp4",
    "/discover-services/delivery.mp4",
    "/discover-services/events.mp4",
    "/discover-services/facials.mp4",
    "/discover-services/graphic-design.mp4",
    "/discover-services/haircut.mp4",
    "/discover-services/hairdressing.mp4",
    "/discover-services/hairstyling.mp4",
    "/discover-services/it-repairs.mp4",
    "/discover-services/manicure.mp4",
    "/discover-services/massage.mp4",
    "/discover-services/moving-logistics.mp4",
    "/discover-services/online-courses.mp4",
    "/discover-services/pedicure.mp4",
    "/discover-services/plumbing.mp4",
    "/discover-services/tutoring.mp4",
    "/discover-services/web-dev.mp4",
  ];

  return (
    <section className={styles.cardsBox}>
      <Ad />
      <section className={styles.cards}>
        <Link
          href="/menu"
          onClick={() => menuDispatch(setMenu("CreateStore"))}
          className={styles.card}
        >
          <Image
            draggable="false"
            src="/mainImgs/store.avif"
            alt="Store"
            fill
            className={styles.img}
          />
          <span>Set up a store</span>
        </Link>

        <Link href="/products" className={styles.card}>
          <DoubleBufferedLoop videos={productsVideos} className={styles.img} />
          <span>Explore products</span>
        </Link>

        <Link href="/meals" className={styles.card}>
          <DoubleBufferedLoop videos={mealsVideos} className={styles.img} />
          <span>Order meals</span>
        </Link>

        <Link href="/services" className={styles.card}>
          <DoubleBufferedLoop videos={servicesVideos} className={styles.img} />
          <span>Discover services</span>
        </Link>
      </section>
    </section>
  );
}

export default CardsBox;
