import Image from "next/image";
import SimpleButton from "./Button/SimpleButton";

interface CaseStudyProps {
  className?: string;
}

const caseStudyData = [
  {
    id: 1,
    categoryEn: "RENOVATION",
    categoryJp: "リノベーション",
    description:
      "現在住んでいるお家、または購入済みの物件を改修によって、新たな価値を生み、お家を生まれ変わらせます。",
    buttonHref: "/",
    imageSrc: "/images/top-01.webp",
    imageAlt: "リノベーション事例 Case Study 01",
  },
  {
    id: 2,
    categoryEn: "LIM",
    categoryJp: "完全規格化住宅",
    description:
      "本当に大切なものだけに絞り込むと見えてくる豊かさがある大好きな暮らしを。",
    buttonHref: "/",
    imageSrc: "/images/top-02.webp",
    imageAlt: "完全規格化住宅事例 Case Study 02",
  },
  {
    id: 3,
    categoryEn: "DESIGN",
    categoryJp: "デザイン",
    description:
      "その場所に立つ、すべての人が「大好き」だと思える空間をご提案いたします。",
    buttonHref: "/",
    imageSrc: "/images/top-01.webp",
    imageAlt: "デザイン事例 Case Study 03",
  },
];

export default function CaseStudy({ className = "" }: CaseStudyProps) {
  return (
    <>
      <div className={`container-wide ${className}`}>
        <h2 className="mb-10">Case Study</h2>
        {caseStudyData.map((study, index) => (
          <div
            key={study.id}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full md:w-[35%] flex flex-col gap-4">
              <span className="underline">Case Study .0{study.id}</span>
              <div className="flex flex-col">
                <span className="[font-size:var(--font-size-xl)] font-medium">
                  {study.categoryEn}
                </span>
                <span className="[font-size:var(--font-size-xs)] font-medium">
                  {study.categoryJp}
                </span>
              </div>
              <div className="[font-size:var(--font-size-xs)] mb-4 md:mb-8">
                {study.description}
              </div>
              <SimpleButton className="max-w-[180px] w-full">more</SimpleButton>
            </div>
            <div className="w-full md:w-[60%]">
              <Image
                src={study.imageSrc}
                alt={study.imageAlt}
                width={1000}
                height={600}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
