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

// basePath の取得はここでOK
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
// basePathが取得できているか、モジュールスコープで一度だけログ出力するのも良い
console.log('[Image Debug] basePath defined at module scope:', basePath);

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

  // ★★★ エラーになる console.log と imagePath の定義はここから削除 ★★★
  // const imagePath = ...
  // console.log(...)

  return (
    <Swiper {...defaultSwiperOptions}>
      {images.map((image, index) => { // 'image' はここで定義される
        // --- ↓↓↓ ログと計算を map の【内側】に移動 ↓↓↓ ---
        const imagePath = `${basePath}${image.src}`; // 各画像に対するパスを計算

        console.log(`--- Image Index ${index} Debug ---`); // どの画像のログか分かるように index を含める
        console.log('basePath (inside map):', basePath); // map の中でも basePath を確認
        console.log('original image.src (inside map):', image.src);
        console.log('Calculated imagePath (inside map):', imagePath);
        // --- ↑↑↑ ここまで移動 ---

        return (
          <SwiperSlide key={`slide-${index}`}>
            <Image
              src={imagePath} // 計算した imagePath を使用
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
        );
      })}
    </Swiper>
  );
}