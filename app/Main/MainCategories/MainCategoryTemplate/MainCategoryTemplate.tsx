"use client";
import Image from "next/image";
import styles from "./MainCategoryTemplate.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "./Swiper.css";
import { JSX } from "react";

interface MainCategoryTemplateProps {
  categoryName: string;
}

interface MainCategoryTemplateSubObject {
  className: string;
  quantity: number;
  svg: JSX.Element;
}

function MainCategoryTemplate({ categoryName }: MainCategoryTemplateProps) {
  const categoryDetails: { [key: string]: MainCategoryTemplateSubObject } = {
    Products: {
      className: styles.products,
      quantity: 9,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="1.1rem"
        >
          <path d="M192 64l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zM82.7 207c-15.3 8.8-20.5 28.4-11.7 43.7l32 55.4c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7l-32-55.4c-8.8-15.3-28.4-20.5-43.7-11.7L82.7 207zM288 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zm64 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM160 384l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zM32 352c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0z" />
        </svg>
      ),
    },
    Services: {
      className: styles.services,
      quantity: 6,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="1.3rem"
        >
          <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160l44.8 0c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2l0 72.8c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-115.7c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1l44.8 0c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6L576 464c0 26.5-21.5 48-48 48l-32 0c-26.5 0-48-21.5-48-48l0-72.8 47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240l0 32 96 0 0-32c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2l0-32-96 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z" />
        </svg>
      ),
    },
    Meals: {
      className: styles.meals,
      quantity: 8,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="1rem"
        >
          <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
        </svg>
      ),
    },
    Stores: {
      className: styles.stores,
      quantity: 10,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="1.3rem"
        >
          <path d="M36.8 192l566.3 0c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0L121.7 0c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224l0 160 0 80c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-80 0-160-64 0 0 160-192 0 0-160-64 0zm448 0l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32l0-256-64 0z" />
        </svg>
      ),
    },
  };

  const items = new Array(categoryDetails[categoryName].quantity || 0).fill(1);

  return (
    <section className={styles.mainCategory}>
      <section
        className={`${styles.header} ${
          categoryDetails[categoryName].className || ""
        }`}
      >
        {categoryDetails[categoryName].svg}
        <h3>{categoryName}</h3>
      </section>
      <section className={styles.categoryItems}>
        <Swiper
          navigation={true}
          modules={[Navigation, Scrollbar, Autoplay]}
          slidesPerView={5}
          slidesPerGroup={1}
          spaceBetween={16}
          scrollbar={{ draggable: false }}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <section className={styles.item}>
                  <Image
                    quality={80}
                    placeholder="blur"
                    blurDataURL="/mainImgs/stores.avif"
                    draggable="false"
                    src="/mainImgs/products.avif"
                    alt="Store"
                    fill
                    className={styles.img}
                  />
                  <span className={styles.cardName}>Card Name</span>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
}

export default MainCategoryTemplate;
