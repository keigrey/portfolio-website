import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeButton from "./ThemeButton";
import AudioPlayer from "./AudioPlayer";
import { motion } from "framer-motion";

export default function NameCard({ isPlaying, setIsPlaying, audioPlayer }) {
  const { t } = useTranslation("common");

  const smallVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 2 },
  };
  const nameRoleVariants = {
    hidden: { opacity: 0, x: "2rem", y: "-50%" },
    visible: { opacity: 1, x: 0, y: "-50%" },
    transition: { duration: 2 },
  };

  const { asPath } = useRouter();
  const dotSymbol = "○";

  return (
    <div className="name-card">
      <motion.div
        initial={asPath === "/" ? smallVariants.hidden : smallVariants.visible}
        animate={smallVariants.visible}
        transition={smallVariants.transition}
        className="lang-sound"
      >
        <AudioPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioPlayer={audioPlayer}
        />
        <LanguageSelector />
      </motion.div>
      <motion.div
        initial={
          asPath === "/" ? nameRoleVariants.hidden : nameRoleVariants.visible
        }
        animate={nameRoleVariants.visible}
        transition={nameRoleVariants.transition}
        className="name-and-role"
      >
        <h1 className="name">{t("name")}</h1>
        <h2 className="role">{t("role")}</h2>
      </motion.div>
      <motion.div
        initial={asPath === "/" ? smallVariants.hidden : smallVariants.visible}
        animate={smallVariants.visible}
        transition={smallVariants.transition}
        className="menu-and-theme"
      >
        <ul className="menu">
          <li>
            <Link
              href="/"
              className={`menu-item ${asPath === "/" ? "active" : ""}`}
            >
              {asPath === "/" ? dotSymbol : t("home")}
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`menu-item ${asPath === "/about" ? "active" : ""}`}
            >
              {asPath === "/about" ? dotSymbol : t("about")}
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={`menu-item ${asPath === "/resume" ? "active" : ""}`}
            >
              {asPath === "/resume" ? dotSymbol : t("resume")}
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={`menu-item ${asPath === "/projects" ? "active" : ""}`}
            >
              {asPath === "/projects" ? dotSymbol : t("projects")}
            </Link>
          </li>
          <li>
            <Link
              href="/hobbies"
              className={`menu-item ${asPath === "/hobbies" ? "active" : ""}`}
            >
              {asPath === "/hobbies" ? dotSymbol : t("hobbies")}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`menu-item ${asPath === "/contact" ? "active" : ""}`}
            >
              {asPath === "/contact" ? dotSymbol : t("contact")}
            </Link>
          </li>
        </ul>
        <div className="theme-selector">
          <ThemeButton mode="light" />
          <ThemeButton mode="dark" />
        </div>
      </motion.div>
    </div>
  );
}
