import React from "react";
import styles from "./SubCategories.module.css";

type CategoriesDataType = {
  [key: string]: {
    [key: string]:
      | {
          [key: string]: string[] | undefined;
        }
      | string[]
      | undefined;
  };
};

const categoriesData: CategoriesDataType = {
  Products: {
    Electronics: {
      "Cell Phones": ["Apple", "Smartphones", "Basic Phones"],
      "Computers & Tablets": [
        "Laptops",
        "Desktop Computers",
        "Tablets",
        "Laptop Bags",
      ],
      "Audio & Photography": ["Bluetooth Speakers", "Home Theater", "Cameras"],
      "Laundry & Cleaning": [
        "Washing Machines",
        "Dryers",
        "Irons & Steamers",
        "Vacuum Cleaners",
      ],
      Entertainment: ["Televisions", "Gaming Consoles"],
      "Computer Accessories": [
        "Keyboards",
        "Mice",
        "Monitors",
        "Laptop Chargers",
        "Microphones",
        "Printers & Scanners",
      ],
      "Phone Accessories": [
        "Cases & Covers",
        "Screen protectors",
        "Power Banks",
        "Chargers",
        "Headphones",
        "Earphones",
      ],
      "Kitchen Appliances": [
        "Microwaves",
        "Rice Cookers",
        "Fridges",
        "Blenders",
        "Kettles",
        "Coffee Makers",
        "Toasters",
        "Air Fryers",
      ],
      "Heating & Cooling": [
        "Air Conditioners",
        "Heaters",
        "Fans",
        "Humidifiers",
        "Air Purifiers",
      ],
      "Personal Care": ["Hair Dryers", "Shavers", "Beauty Devices"],
      "Storage & Memory": ["SD Cards", "Flash Drive", "HDDs", "SDDs"],
      "Networking & Connectivity": [
        "Wi-Fi Routers",
        "Modems",
        "HDMI/Ethernet Cables",
      ],
      "Batteries & Replacement Parts": ["Batteries", "Other parts"],
      "Smart Home Devices": [],
    },
    Groceries: {
      "Fresh Goods": [
        "Fruits",
        "Vegetables",
        "Milk",
        "Cheese",
        "Butter",
        "Eggs",
        "Yogurt",
        "Fresh Meat",
        "Fresh Seafood",
        "Frozen",
      ],
      "Kitchen Essentials": [
        "Seasonings",
        "Canned & Jarred",
        "Pasta, Noodles & Spaghetti",
        "Cereals",
        "Rice",
        "Sugar",
        "Flour & Yeast",
        "Oils & Vinegar",
      ],
      "Drinks & Beverages": [
        "Coffee & Tea",
        "Juices & Soft Drinks",
        "Water",
        "Alcohol",
        "Champagne",
        "Energy Drinks",
      ],
      "Snacks & Sweet": ["Chocolates", "Candy", "Cookies & Biscuits", "Nuts"],
      Fragrances: ["Air Fresheners", "Candles"],
      "Cleaning & Toiletries": [],
      "Vitamins & Supplements": [],
    },
    "Home & Kitchen": {
      Furniture: ["Living Room", "Bedroom", "Office"],
      "Home Decor": ["Wall Art", "Rugs & Curtains", "Lighting"],
      "Kitchen & Dining": ["Cookware", "Dining Sets"],
      "Bed & Bath": ["Bedding", "Towels", "Bathroom Essentials"],
      Arts: ["Sewing Machines", "Gift Wrapping", "Painting & Drawing"],
      "Pet Care": ["Food", "Beds & Toys"],
    },
    Fashion: {
      "Unisex Clothing": [
        "T-Shirts",
        "Shirts",
        "Hoodies & Sweatshirts",
        "Jeans",
        "Shorts",
        "Cardigans & Sweaters",
        "Jumpsuits & Rompers",
        "Activewear",
        "Innerwear & Loungewear",
        "Jackets & Coats",
        "Pants & Trousers",
        "Suits",
        "Gloves",
        "Ethnic Wear",
      ],
      Footwear: [
        "Sneakers",
        "Crocks",
        "Heels",
        "Flats",
        "Formal Shoes",
        "Sandals & Slippers",
        "Boots",
        "Running Shoes",
        "Loafers & Moccasins",
      ],
      Accessories: [
        "Necklaces",
        "Rings",
        "Watches",
        "Earrings",
        "Hats & Caps",
        "Sunglasses",
        "Wallets",
        "Belts",
        "Scarves & Wraps",
        "Hair Accessories",
        "Ties & Pocket Squares",
      ],
      Bags: [
        "Backpacks",
        "Handbags & Clutches",
        "Messenger Bags",
        "Launch Bags",
      ],
      "Specialty Clothing": ["Gym Apparel", "Swimwear & Beachwear"],
      "Women's Clothing": ["Tops", "Blouses", "Skirts", "Women Nightwear"],
      "Men's Clothing": [],
      "Kids' Clothing": [],
    },
    "Beauty & Health": {
      "Personal Care": [
        "Toothpaste & Mouthwash",
        "Soap, Shampoo, & Conditioner",
        "Deodorants",
        "Skin Care",
        "Hair care",
        "Oral Care",
        "Makeup & Cosmetics",
        "Men's Grooming",
      ],
      Fragrances: ["Men's", "Women's"],
      "Wellness & Medicines": [],
    },
    Sports: {
      "Fitness Equipments": [
        "Dumbbells & Barbells",
        "Resistance Bands",
        "Yoga Mats & Blocks",
        "Jump Ropes",
      ],
      Sportswear: [
        "Jerseys",
        "Running Shoes",
        "Training Shorts & Leggings",
        "Sports Bras",
        "Gym T-Shirts & Tank Tops",
        "Sweatbands & Wristbands",
        "Sports Socks",
        "Athletic Jackets",
      ],
      "Camping Gear": [
        "Flashlights & Lanterns",
        "Water Bottles",
        "Fire Starters & Lighters",
        "Mosquito Nets & Repellents",
        "First Aid Kits",
        "Tents & Canopies",
        "Sleeping Bags & Mats",
        "Camping Stoves & Cookware",
        "Multi-Tools & Knives",
      ],
      "Bicycles & Accessories": [],
    },
    "Games & Toys": {
      "Kids Toys": [
        "Action Figures & Dolls",
        "Building Blocks",
        "Remote-Controlled Cars & Drones",
        "Educational & STEM Toys",
        "Ride-On Toys & Scooters",
        "Bath Toys",
      ],
      "Arts & Crafts": [
        "Coloring Books & Crayons",
        "Paints, Brushes & Canvases",
        "Beads & Jewelry-Making Kits",
        "Fabric & Sewing Kits",
        "Stickers & Stamps",
      ],
      "Sexual Wellness": [
        "Personal Massagers",
        "Lubricants & Enhancers",
        "Condoms & Contraceptives",
        "Lingerie & Costumes",
        "Intimate Oils & Candles",
        "Erotic Books & Media",
        "Body Toys",
      ],
      "Board Games & Puzzles": [],
      "Musical Instruments": [],
    },
    Automotive: {
      Accessories: [
        "Phone Holders",
        "Wireless Car Chargers",
        "Interior",
        "Exterior",
        "Safety & Security",
      ],
      Cars: [],
      Motorbike: [],
      "Motorbike Gear": [],
    },
    Academic: {
      Stationery: [
        "Calculators",
        "Pens & Pencils",
        "Notebooks & Journals",
        "Erasers & Sharpeners",
        "Highlighters & Markers",
        "Whiteboards & Chalkboards",
        "Sticky Notes & Memo Pads",
        "Paper Clips & Staples",
      ],
      Books: ["TextBooks", "E-Books"],
      "Learning Tools": ["Science Kits & Lab Equipment", "Math Tools"],
    },
  },
  Services: {
    "Beauty & Wellness": {
      Hairdressing: [],
      "Manicures & Pedicures": [],
      Massage: [],
      "Haircuts & Styling": [],
      Facials: [],
    },
    Tech: {
      "Web/App Development": [],
      "Graphic Design": [],
      "IT support": [],
      Repairs: [],
    },
    Home: {
      Cleaning: [],
      "Plumbing & Electrical": [],
      Carpentry: [],
    },
    Academic: {
      Tutoring: [],
      "Online courses": [],
      Programs: [],
    },
    Logistics: {
      Moving: [],
      Delivery: [],
    },
    Events: {},
  },
  Meals: {
    Bakery: {
      Breads: ["White Breads", "Wheat Breads", "Baguettes", "Flat Breads"],
      Pastries: [
        "Pies",
        "Spring Rolls",
        "Samosa",
        "Sausage Roll",
        "Tarts",
        "Rock Buns",
        "Others",
      ],
      Cakes: [],
      Cookies: [],
    },
    Beverages: {
      "Juices & Smoothies": [
        "Fresh Fruit Juices",
        "Flavored Juices",
        "Smoothie Mixes",
      ],
      "Grains & Porridge": [
        "Oatmeal",
        "Cornmeal",
        "Millet",
        "Porridge",
        "Tom Brown",
        "Rice Water",
      ],
      "Coffee & Tea": ["Coffee", "Tea"],
      "Dairy & Non-Dairy": [
        "Fresh Milk & Flavored Milk",
        "Soy Milk",
        "Hot Chocolate",
        "Yogurt Drinks",
      ],
      "Native Drinks": [
        "Sobolo",
        "Coconut Water",
        "Palm Wine",
        "Pito",
        "Asaana",
        "Brukina",
        "Lamugin",
      ],
    },
    Instant: {
      Salads: [],
      "Sandwiches & Wraps": [],
      "Meal Kits": [],
    },
    International: {
      Italian: ["Pizza", "Pasta, Noodles & Spaghetti"],
      American: ["Burger", "Shawarma"],
      "Grilled & BBQ Dishes": ["Grilled Meat", "Grilled Fish", "BBQ", "Kebab"],
    },
    Native: {
      "Complete Dishes": [
        "Fufu/Banku & Soup",
        "Banku & Tilapia",
        "Kelewele",
        "Beans & Plantain",
        "Kenkey & Fish",
        "Yam/Ampesi & Palava Sauce (Kontomire Stew)",
        "Tuo Zaafi",
        "Others",
      ],
      "Rice-Based Dishes": [
        "Jollof Rice",
        "Plain Rice with Stew",
        "Fried Rice",
        "Waakye",
        "Rice Balls(Omotuo)",
      ],
      "Corn-Based Dishes": ["Kenkey", "Banku", "Others"],
      "Cassava & Yam-Based Dishes": ["Fufu", "Ampesi", "Others"],
      Soups: ["Light Soup", "Groundnut Soup", "Palm Nut Soup", "Others"],
      "Stews & Sauces": ["Shito", "Tomato Stew", "Palava Sauce", "Others"],
    },
    "Vegan & Vegetarian": {},
    "Meal Prep": {},
    Snacks: {
      "Chips & Crackers": [],
    },
    "Frozen Foods": {
      "Ice Cream": [],
    },
  },
};

function SubCategories({
  categoryDetails,
}: {
  categoryDetails: {
    category: string;
    subCategory: string;
  };
}) {
  const { category, subCategory } = categoryDetails;

  // Fetch the selected category and subCategory data
  const subCategoryData = categoriesData[category]?.[subCategory];

  return (
    <section className={styles.container}>
      {subCategoryData ? (
        <div className={styles.listContainer}>
          {typeof subCategoryData === "object" &&
            Object.entries(subCategoryData).map(([key, items]) => (
              <div key={key} className={styles.subCategory}>
                <h3 className={styles.subCategoryTitle}>{key}</h3>
                {Array.isArray(items) && items.length > 0 && (
                  <ul className={styles.itemList}>
                    {items.map((item: string) => (
                      <li key={item} className={styles.item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ) : (
        <p className={styles.errorMessage}>Subcategory not found</p>
      )}
    </section>
  );
}

export default SubCategories;
