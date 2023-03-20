import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeButton from "./ThemeButton";
import AudioPlayer from "./AudioPlayer";

export default function NameCard({ isPlaying, setIsPlaying, audioPlayer }) {
  const { t } = useTranslation("common");

  const { asPath } = useRouter();
  const dotSymbol = "○";

  return (
    <div className="name-card">
      <div className="lang-sound">
        <AudioPlayer
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioPlayer={audioPlayer}
        />
        <LanguageSelector />
      </div>
      <div className="name-and-role">
        <h1 className="name">{t("name")}</h1>
        <h2 className="role">{t("role")}</h2>
      </div>
      <div className="menu-and-theme">
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
      </div>
    </div>
  );
}
