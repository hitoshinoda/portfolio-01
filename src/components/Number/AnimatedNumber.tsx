"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

interface AnimatedNumberProps {
  value: number; // 表示したい最終的な数値
  duration?: number; // アニメーションの時間（秒、任意）
  className?: string; // 追加のスタイルクラス（任意）
}

export default function AnimatedNumber({
  value,
  duration = 1.5,
  className,
}: AnimatedNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
