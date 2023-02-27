import React from "react";
import Script from "next/script";

export default function Clouds() {
  return (
    <div className="clouds">
      <h1>Clouds</h1>
      <div className="background--custom">
        <canvas id="canvas" />
      </div>
      <Script
        src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"
        onLoad={() => {
          const gradient = new Gradient();
          gradient.initGradient("#canvas");
        }}
      ></Script>
    </div>
  );
}
