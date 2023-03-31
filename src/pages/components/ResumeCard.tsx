import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Satellite from "./Satellite";
import { motion } from "framer-motion";
import { cardAnimation } from "@/framerAnimations";

export default function ResumeCard() {
  const { t } = useTranslation("resume");

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      exit={cardAnimation.exit}
      transition={cardAnimation.transition}
      className="resume-card content-card"
    >
      <Satellite />
    </motion.div>
  );
}
