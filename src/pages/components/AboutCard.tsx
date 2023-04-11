import React from "react";
import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { cardAnimation } from "@/framerAnimations";
import Image from "next/image";
import photoMeAndWife from "/public/images/me-and-my-wife.jpg";
import photoMeMain from "/public/images/me-main.jpg";
import photoShinsengumi from "/public/images/me-in-shinsengumi-haori.jpg";
import photoBroom from "/public/images/me-on-a-broom.jpg";
import photoMusic from "/public/images/me-music.jpeg";
import gifHello from "/public/images/hello-desktop.gif";

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
      <div className="image-container main">
        <Image
          src={photoMeMain}
          alt="a photo of the person"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p>{t("paragraph1")}</p>
      <p>{t("paragraph2")}</p>
      <div className="image-container wave">
        <Image
          src={gifHello}
          alt="a photo of the person"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p>{t("paragraph3")}</p>
      <div className="image-container grid">
        <div className="grid-container">
          <div className="grid-item">
            <Image
              src={photoBroom}
              alt="a photo of the person"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid-item">
            <Image
              src={photoShinsengumi}
              alt="a photo of the person"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="grid-item">
            <Image
              src={photoMeAndWife}
              alt="a photo of the person"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <p>{t("paragraph4")}</p>
      <p>{t("paragraph5")}</p>
      <div className="image-container music">
        <Image
          src={photoMusic}
          alt="a photo of the person"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <p>{t("paragraph6")}</p>
    </motion.div>
  );
}
