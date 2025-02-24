import React, { useState } from "react";
import { X, Palette, Shapes, Brush } from "lucide-react";
import { icons } from "./Icons";
import styles from "./Logo.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogoValue } from "@/app/redux/slices/CreateStoreFormSlice";
import { RootState } from "@/app/redux/store";

const Logo = () => {
  const dispatch = useDispatch();
  const formFieldsLogo = useSelector(
    (state: RootState) => state.storeFormValue.logo
  );

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<number>(formFieldsLogo.icon);
  const [bgColor, setBgColor] = useState(formFieldsLogo.bg);
  const [iconColor, setIconColor] = useState(formFieldsLogo.color);

  const handleModalClose = () => {
    setIsOpen(false);
    dispatch(
      setLogoValue({ icon: selectedIcon, color: iconColor, bg: bgColor })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.labels}>
        <span>Logo</span>
        <button onClick={() => setIsOpen(true)} className={styles.openButton}>
          <Brush size={16} />
          Customize Logo
        </button>
      </div>

      <div className={styles.selectedLogo}>
        <p>Selected logo.</p>
        <div
          className={styles.selectedLogoBox}
          style={{ backgroundColor: bgColor }}
        >
          {selectedIcon !== null && icons.stores[selectedIcon]
            ? React.cloneElement(icons.stores[selectedIcon], {
                fill: iconColor,
                width: 40,
                height: 40,
                style: {
                  filter: `drop-shadow(2px 2px 5px #000)`,
                },
              })
            : null}
        </div>
      </div>

      {isOpen && (
        <div className={styles.overlay} onClick={handleModalClose}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button onClick={handleModalClose} className={styles.closeButton}>
              <X size={24} />
            </button>

            <div className={styles.content}>
              <div className={styles.preview}>
                <h2>Preview</h2>
                <div
                  className={styles.logoBox}
                  style={{ backgroundColor: bgColor }}
                >
                  {selectedIcon !== null && icons.stores[selectedIcon]
                    ? React.cloneElement(icons.stores[selectedIcon], {
                        // Clone and alter props of child without manually creating new element
                        fill: iconColor,
                        width: 60,
                        height: 60,
                        style: {
                          filter: `drop-shadow(2px 2px 5px #000)`,
                        },
                      })
                    : null}
                </div>
              </div>

              <div className={styles.customization}>
                <h2>Customize</h2>

                <div className={styles.option}>
                  <div className={styles.optionLabel}>
                    <Shapes size={18} />
                    <span>Select an Icon</span>
                  </div>
                  <div className={styles.iconGrid}>
                    {Object.entries(icons.stores).map(([key, icon]) => (
                      <div
                        key={key}
                        className={`${styles.iconWrapper} ${
                          selectedIcon === parseInt(key) ? styles.selected : ""
                        }`}
                        onClick={() => setSelectedIcon(parseInt(key))}
                      >
                        {React.cloneElement(icon, {
                          fill: "white",
                          width: 20,
                          height: 20,
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.option}>
                  <div className={styles.optionLabel}>
                    <Palette size={17} />
                    <span>Background Color:</span>
                  </div>
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className={styles.colorPicker}
                  />
                </div>

                <div className={styles.option}>
                  <div className={styles.optionLabel}>
                    <Palette size={17} />
                    <span>Icon Color:</span>
                  </div>
                  <input
                    type="color"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                    className={styles.colorPicker}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
