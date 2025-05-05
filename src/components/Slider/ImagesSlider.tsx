"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface RoomImage {
  src: string;
  alt: string;
  description: string;
}

interface RoomsSliderProps {
  images: RoomImage[];
  swiperOptions?: object;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "portfolio-01";

export default function RoomsSlider({
  images,
  swiperOptions,
}: RoomsSliderProps) {
  const defaultSwiperOptions = {
    modules: [Navigation, Pagination, Autoplay, EffectFade],
    effect: "fade",
    fadeEffect: { crossFade: true },
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    className: "w-full",
    ...swiperOptions,
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500">
        表示できる画像がありません。
      </div>
    );
  }

  return (
    <Swiper {...defaultSwiperOptions}>
      {images.map((image, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <Image
            src={`${basePath}${image.src}`}
            alt={image.alt}
            className="mb-4"
            width={1000}
            height={600}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "830px",
              objectFit: "cover",
            }}
            priority={index === 0}
          />
          <div className="w-full md:w-[40%] ml-auto">
            <div className="[font-size:var(--font-size-xs)]">
              {image.description}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
