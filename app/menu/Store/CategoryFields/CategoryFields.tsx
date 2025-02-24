import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategoriesValue,
  setFieldState,
  setStoreTypeValue,
} from "@/app/redux/slices/CreateStoreFormSlice"; // Import Redux action
import styles from "./CategoryFields.module.css";
import { RootState } from "@/app/redux/store";

const products = [
  "Electronics",
  "Groceries",
  "Fashion",
  "Academic",
  "Home & Kitchen",
  "Beauty & Health",
  "Sports",
  "Games & Toys",
  "Automotive",
];

const meals = [
  "Beverages",
  "Bakery",
  "International",
  "Native",
  "Instant & Snacks",
  "Frozen Foods",
  "Vegan & Vegetarian",
  "Meal Prep Subscriptions",
];

const services = [
  "Beauty & Wellness",
  "Home",
  "Tech",
  "Academic",
  "Logistics",
  "Events",
];

function CategoryFields() {
  const dispatch = useDispatch();
  const fieldsValues = useSelector((state: RootState) => state.storeFormValue);
  const catType = useSelector(
    (state: RootState) => state.updateStore.categoryType
  );

  const [storeType, setStoreType] = useState(fieldsValues.storeType);
  const [storeCategories, setStoreCategories] = useState<string[]>(
    fieldsValues.categories
  );

  const handleCategoryChange = (category: string, checked: boolean) => {
    // Add category if checked and remove if unchecked
    const newSelection = checked
      ? [...storeCategories, category]
      : storeCategories.filter((cat) => cat !== category);

    setStoreCategories(newSelection);
    // Set field to true if at least one is checked
    dispatch(
      setFieldState({ field: "categories", value: newSelection.length > 0 })
    );
    // Update values in redux
    dispatch(setCategoriesValue(newSelection));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStoreType(value);
    dispatch(setStoreTypeValue(value));
  };

  return (
    <>
      {catType && (
        <div className={styles.formGroup}>
          <label className={styles.label}>Store Type</label>
          <div className={styles.radioGroup}>
            {["products", "meals", "services"].map((type) => (
              <label key={type} className={styles.radioLabel}>
                <input
                  type="radio"
                  value={type}
                  checked={storeType === type} // Check hidden radio when the custom radio below is selected
                  onChange={handleTypeChange}
                  className={styles.radioInput}
                />
                <span className={styles.customRadio}></span>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </label>
            ))}
          </div>
        </div>
      )}

      <div className={styles.formGroup}>
        <label>
          {storeType.charAt(0).toUpperCase() + storeType.slice(1)} (Check all
          that apply)
        </label>
        <div className={styles.checkboxGroup}>
          {{
            products,
            meals,
            services,
          }[storeType]?.map((category) => (
            <label key={category} className={styles.customCheckbox}>
              <input
                type="checkbox"
                value={category.toLowerCase()}
                checked={storeCategories.includes(category.toLowerCase())}
                onChange={(e) =>
                  handleCategoryChange(e.target.value, e.target.checked)
                }
              />
              <span className={styles.checkboxIcon}></span>
              {category}
            </label>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryFields;
