import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function MailCard() {
  const { t } = useTranslation("mail");

  return (
    <div className="mail-card content-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
