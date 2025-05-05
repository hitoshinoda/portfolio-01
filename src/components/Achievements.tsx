import AnimatedNumber from "@/components/Number/AnimatedNumber";
import Image from "next/image";

interface AchievementsProps {
  className?: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const achievementsData = [
  { id: 1, label: "総施工実績", value: 1854, unit: "件 +" , image: `${basePath}/images/top-01.webp` , description: "お客様との信頼関係を重視し、数多くの施工を行ってきました。" },
  { id: 2, label: "顧客満足度", value: 97, unit: "%" , image: `${basePath}/images/top-02.webp` , description: "お客様の声を適切に聞き出すヒアリングを行うことで、高い満足度をいただいております。" },
  { id: 3, label: "デザインアワード受賞", value: 5, unit: "回" , image: `${basePath}/images/top-01.webp` , description: "デザインの世界では、数多くの賞を受賞しております。" },
];

export default function Achievements({ className = "" }: AchievementsProps) {
  return (
    <>
      <div className={`container-wide ${className}`}>
        <h2 className="text-center text-white mb-10">Our Achievements</h2>
        <div className="flex flex-col gap-8 md:gap-20 text-center">
          {achievementsData.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className={`flex justify-around items-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <Image src={achievement.image} alt={achievement.label} width={4000} height={4000} className="w-1/2 h-[50vh] object-cover" />
              <div className="w-1/3">
                <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-[var(--background)] mb-2">
                  <AnimatedNumber value={achievement.value} duration={2} />
                  {achievement.unit && (
                    <span className="text-2xl md:text-3xl lg:text-4xl align-baseline ml-1">
                      {achievement.unit}
                    </span>
                  )}
                </div>
                <div className="text-base md:text-lg text-gray-200 mb-4">
                  {achievement.label}
                </div>
                <div className="[font-size:var(--font-size-xs)] text-gray-200">
                  {achievement.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
