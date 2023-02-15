import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ResumeCard() {
  const { t } = useTranslation("resume");

  return (
    <div className="resume-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
