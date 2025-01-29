"use client";
import Image from "next/image";
import styles from "./MainCategoryTemplate.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "./Swiper.css";

interface MainCategoryTemplateProps {
  categoryName: string;
}

function MainCategoryTemplate({ categoryName }: MainCategoryTemplateProps) {
  const items = new Array(14).fill(1);

  const categoryClasses: { [key: string]: string } = {
    Products: styles.products,
    Services: styles.services,
    Meals: styles.meals,
    Stores: styles.stores,
  };

  return (
    <section className={styles.mainCategory}>
      <section
        className={`${styles.header} ${categoryClasses[categoryName] || ""}`}
      >
        <h3>{categoryName}</h3>
      </section>
      <section className={styles.categoryItems}>
        <Swiper
          navigation={true}
          modules={[Navigation, Scrollbar, Autoplay]}
          slidesPerView={5}
          slidesPerGroup={1}
          spaceBetween={10}
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
