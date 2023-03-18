import React from "react";
import { useTranslation } from "next-i18next";

export default function AboutCard() {
  const { t } = useTranslation("about");

  return (
    <div className="about-card content-card">
      <p>{t("introduction")}</p>
      <p>{t("introduction")}</p>
    </div>
  );
}
