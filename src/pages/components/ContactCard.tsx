import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ContactCard() {
  const { t } = useTranslation("contact");

  return (
    <div className="contact-card content-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
