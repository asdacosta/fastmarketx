"use client";
import React, { useRef, useState } from "react";
import styles from "./AddProduct.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Image from "next/image";

const colors = [
  { name: "Black", hex: "#000000" },
  { name: "White", hex: "#ffffff" },
  { name: "Red", hex: "#ff0000" },
  { name: "Blue", hex: "#0000ff" },
  { name: "Green", hex: "#008000" },
  { name: "Yellow", hex: "#ffff00" },
  { name: "Purple", hex: "#800080" },
  { name: "Pink", hex: "#ff69b4" },
  { name: "Orange", hex: "#ffa500" },
  { name: "Brown", hex: "#a52a2a" },
  { name: "Gray", hex: "#808080" },
  { name: "Cyan", hex: "#00ffff" },
  { name: "Magenta", hex: "#ff00ff" },
  { name: "Teal", hex: "#008080" },
  { name: "Indigo", hex: "#4b0082" },
  { name: "Maroon", hex: "#800000" },
  { name: "Olive", hex: "#808000" },
  { name: "Navy", hex: "#000080" },
  { name: "Beige", hex: "#f5f5dc" },
  { name: "Turquoise", hex: "#40e0d0" },
  { name: "Salmon", hex: "#fa8072" },
  { name: "Gold", hex: "#ffd700" },
  { name: "Silver", hex: "#c0c0c0" },
];

const sizes = ["S", "M", "L", "XL", "XXL"];

interface Product {
  name: string;
  description: string;
  category: string;
  price: string;
  discountPrice: string;
  stock: string;
  sizes: string[];
  colors: string[];
  brand: string;
  shipping: string;
  tags: string;
  images: File[];
}

function AddProduct() {
  const [buttonActive, setButtonActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [product, setProduct] = useState<Product>({
    name: "",
    description: "",
    category: "",
    price: "",
    discountPrice: "",
    stock: "",
    sizes: [],
    colors: [],
    brand: "",
    tags: "",
    shipping: "pickup",
    images: [],
  });

  const selectedCategories = useSelector(
    (state: RootState) => state.storeFormValue.categories
  );

  const toggleColor = (color: string) => {
    setProduct((prev) => ({
      ...prev,
      selectedColors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const toggleSize = (size: string) => {
    setProduct((prev) => ({
      ...prev,
      selectedSizes: prev.sizes.includes(size)
        ? prev.sizes.filter((s) => s !== size)
        : [...prev.sizes, size],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProduct({
        ...product,
        images: [...product.images, ...Array.from(e.target.files)],
      });
    }
  };

  const removeImage = (index: number) => {
    setProduct((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.addPdt}>
      <button
        className={styles.addButton}
        onClick={() => setButtonActive((prev) => !prev)}
        disabled={buttonActive}
      >
        <svg viewBox="0 0 448 512">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
        </svg>
        Add Product
      </button>
      {buttonActive && (
        <section className={styles.container}>
          <p>Fill in the details</p>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Description</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Category</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                {selectedCategories.map((cat) => (
                  <option key={cat} value={cat.toLocaleLowerCase()}>
                    {cat.charAt(0).toLocaleUpperCase() +
                      cat.slice(1).toLocaleLowerCase()}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div>
                <label>Price (USD)</label>
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Discount Price (Optional)</label>
                <input
                  type="number"
                  name="discountPrice"
                  value={product.discountPrice}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label>Brand Name</label>
              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                placeholder="Brand (if applicable)"
              />
            </div>

            <div className={styles.row}>
              <div>
                <label>Quantity Available</label>
                <input
                  type="number"
                  name="stock"
                  value={product.stock}
                  onChange={handleChange}
                  required
                />
              </div>
              <label>Sizes:</label>
              <div className={styles.selectionContainer}>
                {sizes.map((size) => (
                  <button
                    type="button"
                    key={size}
                    className={`${styles.optionButton} ${
                      product.sizes.includes(size) ? styles.selected : ""
                    }`}
                    onClick={() => toggleSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label>Colors:</label>
              <div className={styles.selectionContainer}>
                {colors.map((color) => (
                  <button
                    type="button"
                    key={color.name}
                    className={`${styles.optionButton} ${
                      product.colors.includes(color.name) ? styles.selected : ""
                    }`}
                    onClick={() => toggleColor(color.name)}
                    style={{ borderColor: color.hex }}
                  >
                    <span
                      className={styles.colorCircle}
                      style={{ backgroundColor: color.hex }}
                    ></span>
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label>Product Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                value={product.tags}
                onChange={handleChange}
                placeholder="e.g., trendy, casual, gaming"
              />
            </div>

            <div>
              <label>Receiving Method</label>
              <select
                name="shipping"
                value={product.shipping}
                onChange={handleChange}
              >
                <option value="pickup">Pickup</option>
                <option value="delivery">Delivery</option>
                <option value="both">Pickup / Delivery</option>
              </select>
            </div>

            <div>
              <label>Upload Images:</label>
              <div className={styles.uploadContainer}>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className={styles.fileInput}
                  ref={fileInputRef}
                />
                <button
                  type="button"
                  className={styles.uploadButton}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg viewBox="0 0 512 512">
                    <path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                  </svg>
                  Select Files
                </button>
              </div>
              {product.images.length > 0 && (
                <div className={styles.imagePreviewContainer}>
                  {product.images.map((image, index) => (
                    <div key={index} className={styles.imagePreview}>
                      <Image src={URL.createObjectURL(image)} alt="Product" />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className={styles.removeButton}
                      >
                        ❌
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.cancelAddButtons}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => setButtonActive(false)}
              >
                Cancel
              </button>
              <button type="submit" className={styles.submitBtn}>
                Add
              </button>
            </div>
          </form>
        </section>
      )}
    </section>
  );
}

export default AddProduct;
