import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Satellite from "./Satellite";

export default function ResumeCard() {
  const { t } = useTranslation("resume");

  return (
    <div className="resume-card content-card">
      <Satellite />
    </div>
  );
}
