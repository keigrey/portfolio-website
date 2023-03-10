import React from "react";

export default function Satellite() {
  return (
    <div className="satellite">
      <svg
        // width="46"
        // height="93"
        viewBox="0 0 46 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-image"
      >
        <path d="M20.8787 92.1213C22.0503 93.2929 23.9498 93.2929 25.1213 92.1213L44.2132 73.0294C45.3848 71.8579 45.3848 69.9584 44.2132 68.7868C43.0416 67.6152 41.1421 67.6152 39.9706 68.7868L23 85.7574L6.02944 68.7868C4.85787 67.6152 2.95837 67.6152 1.7868 68.7868C0.615227 69.9584 0.615227 71.8579 1.7868 73.0294L20.8787 92.1213ZM20 1.31134e-07L20 90L26 90L26 -1.31134e-07L20 1.31134e-07Z" />
      </svg>
      <a className="resume-link" href="/assets/resume.pdf"></a>
    </div>
  );
}
