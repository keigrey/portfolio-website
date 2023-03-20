import React from "react";

export default function Satellite() {
  return (
    <div className="satellite">
      <svg
        viewBox="0 0 50 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow-image"
      >
        <line x1="-2.62268e-07" y1="97" x2="50" y2="97" strokeWidth="6" />
        <path d="M22.8787 92.1213C24.0503 93.2929 25.9498 93.2929 27.1213 92.1213L46.2132 73.0294C47.3848 71.8579 47.3848 69.9584 46.2132 68.7868C45.0416 67.6152 43.1421 67.6152 41.9706 68.7868L25 85.7574L8.02944 68.7868C6.85787 67.6152 4.95837 67.6152 3.7868 68.7868C2.61523 69.9584 2.61523 71.8579 3.7868 73.0294L22.8787 92.1213ZM22 1.31134e-07L22 90L28 90L28 -1.31134e-07L22 1.31134e-07Z" />
      </svg>
      <a className="resume-link" href="/assets/resume.pdf"></a>
    </div>
  );
}
