import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBannerValue,
  setFieldState,
} from "@/app/redux/slices/CreateStoreFormSlice";
import styles from "./Banner.module.css";
import { MousePointerClick, Upload } from "lucide-react";
import { RootState } from "@/app/redux/store";

const PIXABAY_API_KEY = process.env.NEXT_PUBLIC_PIXABAY_API_KEY || "";

function Banner() {
  const dispatch = useDispatch();
  const formFieldsBanner = useSelector(
    (state: RootState) => state.storeFormValue.banner
  );

  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<
    { id: number; webformatURL: string; largeImageURL: string }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(
    formFieldsBanner
  );

  const fetchImages = async (searchQuery: string) => {
    if (!searchQuery) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(
          searchQuery
        )}&image_type=photo&per_page=10&orientation=horizontal`
      );
      const data = await response.json();
      setImages(data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchImages(query);
  };

  const handleImageSelect = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    dispatch(setFieldState({ field: "banner", value: true }));
    dispatch(setBannerValue(imageUrl));
    setIsModalOpen(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        dispatch(setFieldState({ field: "banner", value: true }));
        dispatch(setBannerValue(reader.result as string));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.labels}>
        <span>Banner</span>
        <p>Search for images online.</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles.openButton}
        >
          <MousePointerClick size={18} />
          Select an Image
        </button>

        <p>Use your own image.</p>
        <label htmlFor="file-upload" className={styles.openButton}>
          <Upload size={18} />
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>

      {selectedImage && (
        <div className={styles.selectedImageContainer}>
          <p>Selected Image:</p>
          <img
            src={selectedImage}
            alt="Selected"
            className={styles.selectedImage}
          />
        </div>
      )}

      {isModalOpen && (
        <div className={styles.overlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className={styles.closeButton}
            >
              X
            </button>

            <form onSubmit={handleSearchSubmit} className={styles.searchForm}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for images"
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                Search
              </button>
            </form>

            {loading && <p>Loading...</p>}

            <div className={styles.imageGrid}>
              {images.map((image) => (
                <div
                  key={image.id}
                  className={styles.imageItem}
                  onClick={() => handleImageSelect(image.webformatURL)}
                >
                  <img
                    src={image.webformatURL}
                    alt="Search Result"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Banner;
