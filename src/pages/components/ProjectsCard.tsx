import React from "react";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import ProjectCardMini from "./ProjectCardMini";
import ProjectCardFull from "./ProjectCardFull";
import { motion, AnimatePresence } from "framer-motion";
import { cardAnimation } from "@/framerAnimations";

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
  const projectDates = [
    t("ondoDate"),
    t("talltowerDate"),
    t("appreciateDate"),
    t("taberuDate"),
  ];
  const projectURLs = [
    ["https://github.com/team-ondo", "https://ondo.onrender.com/"],
    ["https://github.com/keigrey/talltower", ""],
    [
      "https://github.com/keigrey/appreciate-server",
      "https://app-reciate.herokuapp.com/",
    ],
    ["https://github.com/keigrey/taberu", "https://taberu.up.railway.app/"],
  ];

  return (
    <motion.div
      initial={cardAnimation.initial}
      animate={cardAnimation.animate}
      exit={cardAnimation.exit}
      transition={cardAnimation.transition}
      className="projects-card content-card"
    >
      {selectedProjectId === null ? (
        projectTitles.map((title, index) => (
          <ProjectCardMini
            key={index}
            number={index > 8 ? index + 1 : `0${index + 1}`}
            title={title}
            seeMore={t("seeMore")}
            projectId={index}
            setProjectId={setSelectedProjectId}
          />
        ))
      ) : (
        <ProjectCardFull
          number={
            selectedProjectId > 8
              ? selectedProjectId + 1
              : `0${selectedProjectId + 1}`
          }
          title={projectTitles[selectedProjectId]}
          description={projectDescriptions[selectedProjectId]}
          date={projectDates[selectedProjectId]}
          gitHub={projectURLs[selectedProjectId][0]}
          website={projectURLs[selectedProjectId][1]}
          setProjectId={setSelectedProjectId}
        />
      )}
    </motion.div>
  );
}
