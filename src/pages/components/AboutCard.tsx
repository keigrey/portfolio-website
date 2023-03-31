import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { cardAnimation } from "@/framerAnimations";

export default function AboutCard() {
  const { t } = useTranslation("about");

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      exit={cardAnimation.exit}
      transition={cardAnimation.transition}
      className="about-card content-card"
    >
      <p>{t("introduction")}</p>
      <p>{t("introduction")}</p>
    </motion.div>
  );
}
