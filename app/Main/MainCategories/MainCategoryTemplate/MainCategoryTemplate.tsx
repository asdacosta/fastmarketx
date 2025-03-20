"use client";
import Image from "next/image";
import styles from "./MainCategoryTemplate.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "./Swiper.css";
import Link from "next/link";
import { CategoryDetails } from "../CategoryDetails/CategoryDetails";

interface MainCategoryTemplateProps {
  categoryName: string;
  subCategories: string[];
}

function MainCategoryTemplate({
  categoryName,
  subCategories,
}: MainCategoryTemplateProps) {
  categoryName = categoryName.toLowerCase();

  return (
    <section className={styles.mainCategory}>
      <section
        className={`${styles.header} ${
          CategoryDetails[categoryName].className || ""
        }`}
      >
        {CategoryDetails[categoryName].svg}
        <h3>{CategoryDetails[categoryName].name}</h3>
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
          breakpoints={{
            750: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {subCategories.map((category, index) => {
            return (
              <SwiperSlide key={category}>
                <Link
                  href={`/${categoryName}/${category}`}
                  className={styles.item}
                >
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
                  <span className={styles.cardName}>
                    {CategoryDetails[category]?.name}
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </section>
  );
}

export default MainCategoryTemplate;
