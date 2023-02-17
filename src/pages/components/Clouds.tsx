import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function Clouds() {
  const { t } = useTranslation("info");

  return (
    <div className="section-card">
      <div className="clouds">Clouds</div>
    </div>
  );
}
