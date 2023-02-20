import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeButton from "./ThemeButton";

export default function NameCard() {
  const { t } = useTranslation("common");

  const { asPath } = useRouter();
  const dotSymbol = "○";

  return (
    <div className="name-card">
      <h1 className="name">{t("name")}</h1>
      <LanguageSelector />
      <h2 className="role">{t("role")}</h2>
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
            href="/mail"
            className={`menu-item ${asPath === "/mail" ? "active" : ""}`}
          >
            {asPath === "/mail" ? dotSymbol : t("mail")}
          </Link>
        </li>
        <li>
          <Link
            href="/info"
            className={`menu-item ${asPath === "/info" ? "active" : ""}`}
          >
            {asPath === "/info" ? dotSymbol : t("info")}
          </Link>
        </li>
      </ul>
      <ThemeButton mode="light" />
      <ThemeButton mode="dark" />
    </div>
  );
}
