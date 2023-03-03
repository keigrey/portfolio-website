import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

export default function ProjectsCard() {
  const { t } = useTranslation("projects");

  return (
    <div className="projects-card content-card">
      <h1>{t("test")}</h1>
    </div>
  );
}
