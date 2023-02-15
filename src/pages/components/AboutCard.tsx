import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function AboutCard() {
  const { t } = useTranslation("about");

  return (
    <div className="about-card">
      <h1>{t("introduction")}</h1>
    </div>
  );
}
