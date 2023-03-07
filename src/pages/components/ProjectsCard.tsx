import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import ProjectCardMini from "./ProjectCardMini";

export default function ProjectsCard() {
  const { t } = useTranslation("projects");

  const projectTitles = [
    t("ondoTitle"),
    t("talltowerTitle"),
    t("appreciateTitle"),
    t("taberuTitle"),
  ];
  const projectDescriptions = [
    t("ondoDescription"),
    t("talltowerDescription"),
    t("appreciateDescription"),
    t("taberuDescription"),
  ];

  return (
    <div className="projects-card content-card">
      {projectTitles.map((title, index) => (
        <ProjectCardMini
          key={index}
          number={index > 9 ? index + 1 : `0${index + 1}`}
          title={title}
          seeMore={t("seeMore")}
        />
      ))}
    </div>
  );
}
