import React from "react";

export default function ProjectCardFull({
  number,
  title,
  description,
  date,
  setProjectId,
}) {
  return (
    <div
      className="project-card-full"
      onClick={() => {
        setProjectId(null);
      }}
    >
      <h2>{number}</h2>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}
