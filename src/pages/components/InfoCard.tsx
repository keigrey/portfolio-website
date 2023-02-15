import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function InfoCard() {
  const { t } = useTranslation("info");

  return (
    <div className="info-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
