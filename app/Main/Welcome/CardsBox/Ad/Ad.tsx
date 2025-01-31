"use client";
import React from "react";
import Image from "next/image";
import styles from "./Ad.module.css";
import "./Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function Ad() {
  const items = new Array(4).fill(1);

  return (
    <section className={styles.adBox}>
      <Swiper
        pagination={{ clickable: true }}
        direction={"vertical"}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={5}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <section className={styles.item}>
                <Image
                  src="/mainImgs/products.avif"
                  quality={80}
                  draggable="false"
                  alt="Store"
                  fill
                  className={styles.img}
                />
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Ad;
