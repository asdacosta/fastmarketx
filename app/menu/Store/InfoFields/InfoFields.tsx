import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setField } from "@/app/redux/slices/CreateStoreFormSlice";
import { FormState } from "@/app/redux/slices/CreateStoreFormSlice";
import styles from "./InfoFields.module.css";
import Typed from "typed.js";

function InfoFields() {
  const dispatch = useDispatch();

  const [storeName, setStoreName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [mobileMoney, setMobileMoney] = useState("");
  const [campus, setCampus] = useState("legon");

  const storeNameRef = useRef(null);
  const sloganRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (!storeNameRef.current && !sloganRef.current && !descriptionRef.current)
      return;

    const typedStoreName = new Typed(storeNameRef.current, {
      strings: [
        "Urban Closet",
        "Bite Box",
        "Tech Hive",
        "Glow Up Hub",
        "Fun Zone",
        "Hype Fit",
        "Daily Grill",
        "Pocket Tech",
        "Hair Essence",
      ],
      attr: "placeholder",
      loop: true,
      loopCount: 3,
      typeSpeed: 30,
      backSpeed: 15,
      backDelay: 5000,
    });

    const typedSlogan = new Typed(sloganRef.current, {
      strings: [
        "Effortless Style, Every Day.",
        "Tasty foods, Anytime, Anywhere.",
        "Innovation at Your Fingertips.",
        "Your Beauty, Our Passion.",
        "Playtime Redefined.",
        "Wear the real vibe.",
        "Flame, Flavor, Feast.",
        "Smart Choices for Smart Living.",
        "Stronger Strands, Healthier Hair. ^500",
      ],
      attr: "placeholder",
      loop: true,
      loopCount: 3,
      typeSpeed: 20,
      backSpeed: 10,
      backDelay: 4500,
    });

    const typedDescription = new Typed(descriptionRef.current, {
      strings: [
        "Trendy streetwear like oversized hoodies, ripped jeans, t-shirts, and sneakers.",
        "Delicious, freshly made food, delivered hot and fast to your doorstep.",
        "The latest gadgets and electronics at unbeatable prices.",
        "High-quality skincare and beauty products to help you shine every day.",
        "Educational toys, puzzles, game boards, and gaming consoles.",
        "Streetwear essentials like cargo pants, bomber jackets, and sneakers.",
        "Casual eatery serving handcrafted burgers, grilled specialties.",
        "Mobile phones, accessories, headphones, and earbuds.",
        "Premium haircare infused with nourishing ingredients for every hair type. ^500",
      ],
      attr: "placeholder",
      loop: true,
      loopCount: 3,
      typeSpeed: 10,
      backSpeed: 5,
      backDelay: 4000,
      showCursor: false, // cursor shows for textarea input
    });

    return () => {
      typedStoreName.destroy();
      typedSlogan.destroy();
      typedDescription.destroy();
    };
  }, []);

  // The generic <K extends keyof FormState> ensures that you can only pass valid field names from your Redux state.
  const handleInputChange = <K extends keyof FormState>(
    field: K,
    value: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(value);

    // For phone number fields, check if all three are filled to update the "allNumbers" field accordingly.
    if (
      field === "phoneNumber" ||
      field === "whatsapp" ||
      field === "mobileMoney"
    ) {
      // Check if all phone-related fields are non-empty.
      const allNumbersFilled =
        phoneNumber.trim() !== "" &&
        whatsapp.trim() !== "" &&
        mobileMoney.trim() !== "";
      // Dispatch for the specific field being updated.
      dispatch(
        setField({
          field: field as keyof FormState,
          value: value.trim() !== "",
        })
      );
      // Also update the 'allNumbers' field in Redux.
      dispatch(
        setField({
          field: "allNumbers" as keyof FormState,
          value: allNumbersFilled,
        })
      );
    } else {
      dispatch(setField({ field, value: value.trim() !== "" }));
    } // Convert non-empty strings to true
  };

  return (
    <>
      <div className={styles.formGroup}>
        <label>Store Name</label>
        <input
          ref={storeNameRef}
          type="text"
          value={storeName}
          onChange={(e) =>
            handleInputChange("storeName", e.target.value, setStoreName)
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label>Slogan</label>
        <input
          ref={sloganRef}
          type="text"
          value={slogan}
          onChange={(e) =>
            handleInputChange("slogan", e.target.value, setSlogan)
          }
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description (What your store offers)</label>
        <textarea
          ref={descriptionRef}
          value={storeDescription}
          onChange={(e) =>
            handleInputChange(
              "description",
              e.target.value,
              setStoreDescription
            )
          }
        />
      </div>

      <div className={styles.contactGroup}>
        <span>Contact</span>
        <div>
          <svg viewBox="0 0 384 512">
            <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <input
            type="tel"
            placeholder="Mobile number"
            value={phoneNumber}
            onChange={(e) =>
              handleInputChange("phoneNumber", e.target.value, setPhoneNumber)
            }
          />
        </div>
        <div>
          <svg viewBox="0 0 448 512">
            <path d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z" />
          </svg>
          <input
            type="tel"
            placeholder="WhatsApp number"
            value={whatsapp}
            onChange={(e) =>
              handleInputChange("whatsapp", e.target.value, setWhatsapp)
            }
          />
        </div>
        <div>
          <svg viewBox="0 0 640 512">
            <path d="M96 96l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64l-64 0 0-64zM224 96c0 35.3-28.7 64-64 64l0-64 64 0zM576 256l0 64-64 0c0-35.3 28.7-64 64-64zM512 96l64 0 0 64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z" />
          </svg>
          <input
            type="tel"
            placeholder="Mobile money number"
            value={mobileMoney}
            onChange={(e) =>
              handleInputChange("mobileMoney", e.target.value, setMobileMoney)
            }
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>
          Campus (Unlock Universal Store with{" "}
          <span className={styles.premium}>Premium Account</span>)
        </label>
        <select value={campus} onChange={(e) => setCampus(e.target.value)}>
          <option value="universal">Universal</option>
          <option value="legon">Legon</option>
          <option value="knust">KNUST</option>
          <option value="winneba">Winneba</option>
        </select>
      </div>
    </>
  );
}

export default InfoFields;
