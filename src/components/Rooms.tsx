import ImagesSlider from "./Slider/ImagesSlider";

interface RoomsSliderProps {
  className: string;
}

const sliderImages = [
  {
    src: "/images/top-01.webp",
    alt: "洗練されたリビング空間",
    description:
      "広々としたリビングは大きなダイニングテーブルで家族の団欒を楽しめるように。三角屋根の出窓から差し込む光が広いリビングをやさしく包む。",
  },
  {
    src: "/images/top-02.webp",
    alt: "落ち着きのある寝室",
    description:
      "シックな印象を引き締めるよう明るい椅子をレイアウト。優しい雰囲気で日々のストレスから解放される。",
  },
];

const customSliderOptions = {
  effect: "fade",
  autoplay: { delay: 5000 },
};

export default function RoomsSlider({ className }: RoomsSliderProps) {
  return (
    <>
      <div className={`container-wide ${className}`}>
        <div className="relative w-full h-full flex flex-col items-center justify-center mb-4">
          <h2 className="mb-10">Rooms</h2>
          <ImagesSlider
            images={sliderImages}
            swiperOptions={customSliderOptions}
          />
        </div>
      </div>
    </>
  );
}
