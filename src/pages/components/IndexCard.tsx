import React from "react";
import Clouds from "./Clouds";
import { useState, useEffect, useRef } from "react";

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

export default function IndexCard() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xffffff,
          midtoneColor: 0xaeaeae,
          lowlightColor: 0x0,
          baseColor: 0x0,
          zoom: 0.6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="index-card section-card">
      {/* <Clouds /> */}
    </div>
  );
}
