import React from "react";

export default function ProjectCardMini({ number, title, seeMore }) {
  return (
    <div className="project-card">
      <h2>{number}</h2>
      <div className="project-card-circle">
        <p>{seeMore}</p>
      </div>
      <h1>{title}</h1>
    </div>
  );
}
