"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TopView from "@/components/TopView";
import Rooms from "@/components/Rooms";
import ContentList from "@/components/ContentList";
import CaseStudy from "@/components/CaseStudy";
import Achievements from "@/components/Achievements";
import News from "@/components/News";

const defaultBackgroundColorRgb = "rgb(247, 247, 247)";
const targetBackgroundColorRgb = "rgb(23, 23, 23)"; 

export default function Home() {
  const achievementsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: achievementsRef,
    offset: ["start center", "end center"],
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [
      defaultBackgroundColorRgb,
      targetBackgroundColorRgb,
      targetBackgroundColorRgb,
      defaultBackgroundColorRgb,
    ]
  );

  return (
    <motion.div style={{ backgroundColor }}>
      <div>
        <TopView />
      </div>
      <div>
        <Rooms className="mt-[20vh] mb-[10vh] md:mb-[20vh]" />
      </div>
      <div>
        <ContentList className="mb-[10vh] md:mb-[20vh]" />
      </div>
      <div>
        <CaseStudy className="mb-[10vh] md:mb-[20vh]" />
      </div>
      <div ref={achievementsRef}>
        <Achievements className="pt-[50vh] pb-[70vh] md:pt-[70vh]" />
      </div>
      <div>
        <News className="mb-[10vh] md:mb-[20vh]" />
      </div>
    </motion.div>
  );
}
