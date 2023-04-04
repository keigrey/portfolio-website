import React from "react";
import { circOut, easeInOut, motion } from "framer-motion";

export default function SmallMoon({ isVertical }) {
  const animation = {
    initial: { x: "-300%", y: "-50%" },
    animate: { x: "-50%", y: "-50%" },
    exit: { x: "200%", transition: { duration: 1, ease: easeInOut } },
    transition: { duration: 3, ease: circOut },
  };
  const animationVertical = {
    initial: { x: "-50%", y: "200%" },
    animate: { x: "-50%", y: "-50%" },
    exit: { y: "-300%", transition: { duration: 1, ease: easeInOut } },
    transition: { duration: 3, ease: circOut },
  };
  return (
    <motion.div
      initial={isVertical ? animationVertical.initial : animation.initial}
      animate={isVertical ? animationVertical.animate : animation.animate}
      exit={isVertical ? animationVertical.exit : animation.exit}
      transition={
        isVertical ? animationVertical.transition : animation.transition
      }
      className="small-moon"
    ></motion.div>
  );
}
