import React from "react";
import { useTranslation } from "react-i18next";

export default function NameCard() {
  const { t } = useTranslation("common");

  return (
    <>
      <hr />
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
      <hr />
    </>
  );
}
