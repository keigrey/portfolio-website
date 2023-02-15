import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function HobbiesCard() {
  const { t } = useTranslation("hobbies");

  return (
    <div className="hobbies-card section-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
