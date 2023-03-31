import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { cardAnimation } from "@/framerAnimations";

export default function HobbiesCard() {
  const { t } = useTranslation("hobbies");

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      exit={cardAnimation.exit}
      transition={cardAnimation.transition}
      className="hobbies-card content-card"
    >
      <h1>{t("test")}</h1>
    </motion.div>
  );
}
