import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { cardAnimation } from "@/framerAnimations";

export default function HobbiesCard() {
  const { t } = useTranslation("hobbies");

  const hobbies: string[] = t("list", { returnObjects: true });

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      exit={cardAnimation.exit}
      transition={cardAnimation.transition}
      className="hobbies-card content-card"
    >
      {/* <h1>{t("introduction").toLocaleUpperCase()}</h1> */}
      {hobbies.map((hobby) => (
        <h1 key={hobby}>{hobby.toLocaleUpperCase()}</h1>
      ))}
    </motion.div>
  );
}
