import React from "react";
import { useTranslation } from "next-i18next";

export default function HobbiesCard() {
  const { t } = useTranslation("hobbies");

  return (
    <div className="hobbies-card content-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
