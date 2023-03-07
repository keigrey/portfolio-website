import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCardMini from "./ProjectCardMini";
import ProjectCardFull from "./ProjectCardFull";

export default function ProjectsCard() {
  const { t } = useTranslation("projects");

  const [selectedProjectId, setSelectedProjectId] = useState<null | number>(
    null
  );

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
      {selectedProjectId === null ? (
        projectTitles.map((title, index) => (
          <ProjectCardMini
            key={index}
            number={index > 9 ? index + 1 : `0${index + 1}`}
            title={title}
            seeMore={t("seeMore")}
            projectId={index}
            setProjectId={setSelectedProjectId}
          />
        ))
      ) : (
        <ProjectCardFull
          number={
            selectedProjectId > 9
              ? selectedProjectId + 1
              : `0${selectedProjectId + 1}`
          }
          title={projectTitles[selectedProjectId]}
          description={projectDescriptions[selectedProjectId]}
          date={"oct 10"}
          setProjectId={setSelectedProjectId}
        />
      )}
    </div>
  );
}
