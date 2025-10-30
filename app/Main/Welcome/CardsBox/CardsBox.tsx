import React, { useEffect, useRef, useState } from "react";
import styles from "./CardsBox.module.css";
import Image from "next/image";
import Link from "next/link";
import Ad from "./Ad/Ad";
import { useDispatch } from "react-redux";
import { setMenu } from "@/app/redux/slices/MenuUiSlice";

/**
 * 🎥 Custom hook that plays through all videos sequentially and loops infinitely.
 */
function useSequentialLoop(videos: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handleEnded = () => {
      // Go to next video or restart at 0 when last one finishes
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    videoEl.addEventListener("ended", handleEnded);
    return () => videoEl.removeEventListener("ended", handleEnded);
  }, [videos.length]);

  // Update video source only when index changes
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    videoEl.src = videos[currentIndex];
    videoEl.load();
    videoEl.play().catch(() => {});
  }, [currentIndex, videos]);

  return { videoRef };
}

function CardsBox() {
  const menuDispatch = useDispatch();

  // 🧩 Define each playlist
  const productsVideos = [
    "/explore-products/ac-fan-tv.mp4",
    "/explore-products/activewear.mp4",
    "/explore-products/alcohol.mp4",
    "/explore-products/backpacks.mp4",
    "/explore-products/bedding-towels-bathroom-essentials.mp4",
    "/explore-products/chocolates-cookies.mp4",
    "/explore-products/cookware-dining-sets.mp4",
    "/explore-products/dairy-eggs.mp4",
    "/explore-products/female-denim-jeans.mp4",
    "/explore-products/female-underwear.mp4",
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
    "/explore-products/male-underwear.mp4",
    "/explore-products/meat-seafood.mp4",
    "/explore-products/men-denim-jeans.mp4",
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
    "/explore-products/wall-art-curtains-rugs-lighting.mp4",
    "/explore-products/watches-wallets.mp4",
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

  // 🔁 Each section gets its own independent loop
  const products = useSequentialLoop(productsVideos);
  const meals = useSequentialLoop(mealsVideos);
  const services = useSequentialLoop(servicesVideos);

  return (
    <section className={styles.cardsBox}>
      <Ad />
      <section className={styles.cards}>
        {/* Set up a store */}
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

        {/* Explore products */}
        <Link href="/products" className={styles.card}>
          <video
            ref={products.videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={styles.img}
          />
          <span>Explore products</span>
        </Link>

        {/* Order meals */}
        <Link href="/meals" className={styles.card}>
          <video
            ref={meals.videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={styles.img}
          />
          <span>Order meals</span>
        </Link>

        {/* Discover services */}
        <Link href="/services" className={styles.card}>
          <video
            ref={services.videoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            className={styles.img}
          />
          <span>Discover services</span>
        </Link>
      </section>
    </section>
  );
}

export default CardsBox;
