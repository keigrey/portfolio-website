import React from "react";
import { easeInOut, motion } from "framer-motion";

export default function Moon({ isVertical }) {
  const animation = {
    initial: { opacity: 1, x: "-120%", y: "-50%" },
    animate: { opacity: 1, x: "-50%", y: "-50%" },
    exit: { x: "150%", transition: { duration: 1, ease: easeInOut } },
    transition: { duration: 4 },
  };
  const animationVertical = {
    initial: { opacity: 1, x: "-50%", y: "10%" },
    animate: { opacity: 1, x: "-50%", y: "-50%" },
    exit: { y: "-250%", transition: { duration: 1, ease: easeInOut } },
    transition: { duration: 4 },
  };

  return (
    <motion.div
      initial={isVertical ? animationVertical.initial : animation.initial}
      animate={isVertical ? animationVertical.animate : animation.animate}
      exit={isVertical ? animationVertical.exit : animation.exit}
      transition={
        isVertical ? animationVertical.transition : animation.transition
      }
      className="moon"
    ></motion.div>
  );
}
