import React from "react";

export default function ProjectCardMini({
  number,
  title,
  seeMore,
  setProjectId,
  projectId,
}) {
  return (
    <div className="project-card-mini">
      <h2>{number}</h2>
      <div className="project-card-circle">
        <button onClick={() => setProjectId(projectId)}>{seeMore}</button>
        {/* <p>{seeMore}</p> */}
      </div>
      <h1>{title}</h1>
    </div>
  );
}
