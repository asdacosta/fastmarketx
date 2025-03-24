"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import MainCategoryTemplate from "@/app/Main/MainCategories/MainCategoryTemplate/MainCategoryTemplate";
import Header from "@/app/Header/Header";
import { notFound, useParams } from "next/navigation";
import { Provider } from "react-redux";
import ProductItems from "./ProductItems/ProductItems";
import { store } from "../../redux/store";
import { findCategoryData } from "@/app/Main/MainCategories/findCategoryData";

const mainSubCategories = [
  "electronics",
  "groceries",
  "fashion",
  "academic",
  "home-and-kitchen",
  "beauty-and-health",
  "sports",
  "games-and-toys",
  "automotive",
  // Electronics
  "cell-phones",
  "computers-and-tablets",
  "audio-and-photography",
  "computer-accessories",
  "storage-and-memory",
  "phone-accessories",
  "networking-and-connectivity",
  "kitchen-appliances",
  "batteries-and-replacement-parts",
  "laundry-and-cleaning",
  "heating-and-cooling",
  "personal-care-appliances",
  "entertainment-appliances",
  // Groceries
  "fresh-goods",
  "kitchen-essentials",
  "drinks-and-beverages",
  "snacks-and-sweet",
  "home-fragrances",
  // Fashion
  "unisex-clothing",
  "footwear",
  "fashion-accessories",
  "bags",
  "specialty-clothing",
  "womens-clothing",
  // Academic
  "stationery",
  "books",
  "learning-tools",
  // Home & Kitchen
  "furniture",
  "home-decor",
  "kitchen-and-dining",
  "bed-and-bath",
  "arts",
  "pet-care",
  // Beauty & Health
  "personal-care",
  "personal-fragrances",
  // Sports
  "fitness-equipments",
  "sportswear",
  "camping-gear",
  // Toys & Games
  "kids-toys",
  "arts-and-crafts",
  "sexual-wellness",
  "car-accessories",
];

const allowedCategoryRoutes = [
  "electronics",
  "groceries",
  "fashion",
  "academic",
  "home-and-kitchen",
  "beauty-and-health",
  "sports",
  "games-and-toys",
  "automotive",
  // Electronics
  "cell-phones",
  "apple",
  "smartphones",
  "basic-phones",
  "phone-accessories",
  "cases-and-covers",
  "screen-protectors",
  "power-banks",
  "chargers",
  "headphones",
  "earphones",
  "storage-and-memory",
  "sd-cards",
  "flash-drives",
  "hdds",
  "ssds",
  "batteries-and-replacement-parts",
  "batteries",
  "other-replacement-parts",
  "computers-and-tablets",
  "laptops",
  "laptop-bags",
  "desktop-computers",
  "tablets",
  "computer-accessories",
  "keyboards",
  "mice",
  "monitors",
  "laptop-chargers",
  "microphones",
  "printers-and-scanners",
  "networking-and-connectivity",
  "wi-fi-routers",
  "modems",
  "hdmi-and-ethernet-cables",
  "audio-and-photography",
  "bluetooth-speakers",
  "home-theater",
  "cameras",
  "kitchen-appliances",
  "fridges",
  "microwaves",
  "rice-cookers",
  "blenders",
  "coffee-makers",
  "kettles",
  "toasters",
  "air-fryers",
  "laundry-and-cleaning",
  "washing-machines",
  "dryers",
  "irons-and-steamers",
  "vacuum-cleaners",
  "heating-and-cooling",
  "air-conditioners",
  "heaters",
  "fans",
  "humidifiers",
  "air-purifiers",
  "personal-care-appliances",
  "hair-dryers",
  "shavers",
  "beauty-devices",
  "entertainment-appliances",
  "televisions",
  "gaming-consoles",
  "smart-home-devices",
  // Groceries
  "fresh-goods",
  "fruits",
  "vegetables",
  "dairy-and-eggs",
  "milk",
  "cheese",
  "butter",
  "eggs",
  "yogurt",
  "fresh-meat",
  "fresh-seafood",
  "frozen",
  "kitchen-essentials",
  "seasonings",
  "canned-and-jarred",
  "pasta-noodles-and-spaghetti",
  "cereals",
  "rice",
  "sugar",
  "flour-and-yeast",
  "oils-and-vinegar",
  "snacks-and-sweet",
  "chocolates",
  "candy",
  "cookies-and-biscuits",
  "nuts",
  "drinks-and-beverages",
  "coffee-and-tea",
  "juices-and-soft-drinks",
  "alcohol",
  "champagne",
  "energy-drinks",
  "water",
  "cleaning-and-toiletries",
  "home-fragrances",
  "air-fresheners",
  "candles",
  "vitamins-and-supplements",
  // Home & Kitchen
  "furniture",
  "living-room",
  "bedroom",
  "office",
  "home-decor",
  "wall-art",
  "rugs-and-curtains",
  "lighting",
  "kitchen-and-dining",
  "cookware",
  "dining-sets",
  "bed-and-bath",
  "bedding",
  "towels",
  "bathroom-essentials",
  "arts",
  "sewing-machines",
  "painting-and-drawing",
  "gift-wrapping",
  "pet-care",
  "food",
  "beds-and-toys",
  // Fashion
  "t-shirts",
  "shirts",
  "hoodies-and-sweatshirts",
  "jeans",
  "shorts",
  "cardigans-and-sweaters",
  "jumpsuits-and-rompers",
  "activewear",
  "innerwear-and-loungewear",
  "jackets-and-coats",
  "pants-and-trousers",
  "suits",
  "gloves",
  "ethnic-wear",
  "sneakers",
  "crocs",
  "heels",
  "flats",
  "formal-shoes",
  "sandals-and-slippers",
  "boots",
  "running-shoes",
  "loafers-and-moccasins",
  "necklaces",
  "rings",
  "watches",
  "earrings",
  "hats-and-caps",
  "sunglasses",
  "wallets",
  "belts",
  "scarves-and-wraps",
  "hair-accessories",
  "ties-and-pocket-squares",
  "backpacks",
  "handbags-and-clutches",
  "messenger-bags",
  "lunch-bags",
  "gym-apparel",
  "swimwear-and-beachwear",
  "tops",
  "blouses",
  "skirts",
  "women-nightwear",
  "mens-clothing",
  "womens-clothing",
  "unisex-clothing",
  "kids-clothing",
  "specialty-clothing",
  "footwear",
  "bags",
  "fashion-accessories",
  // Beauty & Health
  "personal-care",
  "oral-care",
  "makeup-and-cosmetics",
  "mens-fragrances",
  "womens-fragrances",
  "wellness-and-medicines",
  "personal-fragrances",
  "toothpaste-and-mouthwash",
  "soap-shampoo-and-conditioner",
  "deodorants",
  "skin-care",
  "hair-care",
  "oral-care",
  "mens-grooming",
  // Sports
  "fitness-equipments",
  "sportswear",
  "camping-gear",
  "bicycles-and-accessories",
  "dumbbells-and-barbells",
  "resistance-bands",
  "yoga-mats-and-blocks",
  "jump-ropes",
  "jerseys",
  "running-shoes",
  "training-shorts-and-leggings",
  "sports-bras",
  "gym-t-shirts-and-tank-tops",
  "sweatbands-and-wristbands",
  "sports-socks",
  "athletic-jackets",
  "flashlights-and-lanterns",
  "water-bottles",
  "fire-starters-and-lighters",
  "mosquito-nets-and-repellents",
  "first-aid-kits",
  "tents-and-canopies",
  "sleeping-bags-and-mats",
  "camping-stoves-and-cookware",
  "multi-tools-and-knives",
  // Toys & Games
  "kids-toys",
  "action-figures-and-dolls",
  "building-blocks",
  "remote-controlled-cars-and-drones",
  "educational-and-stem-toys",
  "ride-on-toys-and-scooters",
  "bath-toys",
  "coloring-books-and-crayons",
  "paints-brushes-and-canvases",
  "beads-and-jewelry-making-kits",
  "fabric-and-sewing-kits",
  "stickers-and-stamps",
  "personal-massagers",
  "lubricants-and-enhancers",
  "condoms-and-contraceptives",
  "lingerie-and-costumes",
  "intimate-oils-and-candles",
  "erotic-books-and-media",
  "body-toys",
  "musical-instruments",
  "arts-and-crafts",
  "board-games-and-puzzles",
  "sexual-wellness",
  // Automotive
  "cars",
  "car-accessories",
  "phone-holders",
  "wireless-car-chargers",
  "motorbike",
  "motorbike-gear",
  "phone-holders",
  "wireless-car-chargers",
  "interior",
  "exterior",
  "safety-and-security",
  // Academic
  "books",
  "textbooks",
  "e-books",
  "stationery",
  "calculators",
  "pens-and-pencils",
  "notebooks-and-journals",
  "erasers-and-sharpeners",
  "highlighters-and-markers",
  "whiteboards-and-chalkboards",
  "sticky-notes-and-memo-pads",
  "paper-clips-and-staples",
  "learning-tools",
  "science-kits-and-lab-equipment",
  "math-tools",
];

const allowedItemsRoutes = [
  "trending",
  "speedy",
  "lowcost",
  "popular",
  "hotdeals",
  "new",
];

const itemsCount = new Array(27).fill(1);
const itemsPerPage = 10;

function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const params = useParams();
  const category = params?.category as string;

  if (
    !allowedCategoryRoutes.includes(category) &&
    !allowedItemsRoutes.includes(category)
  )
    notFound();

  const totalPages = Math.ceil(itemsCount.length / itemsPerPage);

  const currentItems = itemsCount.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const subCategories = findCategoryData(category);

  return (
    <>
      <Header />
      <section className={styles.page}>
        {allowedCategoryRoutes.includes(category) && (
          <section className={styles.categories}>
            {mainSubCategories.includes(category) && (
              <MainCategoryTemplate
                categoryName={category}
                subCategories={subCategories}
              />
            )}
          </section>
        )}
        <Provider store={store}>
          <ProductItems currentItems={currentItems} />
        </Provider>
        <section className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <svg viewBox="0 0 320 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              disabled={currentPage === i + 1}
              className={styles.numbers}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
            <svg viewBox="0 0 320 512">
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </section>
      </section>
    </>
  );
}

export default page;
