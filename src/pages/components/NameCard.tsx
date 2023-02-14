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
    <>
      <LanguageSelector />
      <h1>{t("name")}</h1>
      <h2>{t("role")}</h2>
      <ul>
        <li>
          <Link href="/">{asPath === "/" ? dotSymbol : t("home")}</Link>
        </li>
        <li>
          <Link href="/about">
            {asPath === "/about" ? dotSymbol : t("about")}
          </Link>
        </li>
        <li>
          <Link href="/resume">
            {asPath === "/resume" ? dotSymbol : t("resume")}
          </Link>
        </li>
        <li>
          <Link href="/projects">
            {asPath === "/projects" ? dotSymbol : t("projects")}
          </Link>
        </li>
        <li>
          <Link href="/hobbies">
            {asPath === "/hobbies" ? dotSymbol : t("hobbies")}
          </Link>
        </li>
        <li>
          <Link href="/mail">{asPath === "/mail" ? dotSymbol : t("mail")}</Link>
        </li>
        <li>
          <Link href="/info">{asPath === "/info" ? dotSymbol : t("info")}</Link>
        </li>
      </ul>
      <ThemeButton mode="dark" />
      <ThemeButton mode="light" />
    </>
  );
}
