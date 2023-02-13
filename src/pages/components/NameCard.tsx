import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import ThemeButton from "./ThemeButton";

export default function NameCard() {
  const { t } = useTranslation("common");

  return (
    <>
      <LanguageSelector />
      <h1>{t("name")}</h1>
      <h2>{t("role")}</h2>
      <ul>
        <li>{t("home")}</li>
        <li>{t("about")}</li>
        <li>{t("resume")}</li>
        <li>{t("projects")}</li>
        <li>{t("hobbies")}</li>
        <li>{t("info")}</li>
      </ul>
      <ThemeButton mode="dark" />
      <ThemeButton mode="light" />
    </>
  );
}
