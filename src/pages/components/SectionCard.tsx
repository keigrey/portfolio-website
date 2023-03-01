import React from "react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

const getVantaEffectProperties = (
  vantaReference: any,
  currentTheme: string | undefined
) => {
  const darkTheme = currentTheme === "dark";

  return {
    el: vantaReference.current,
    THREE,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: darkTheme ? 0x797979 : 0x636363,
    midtoneColor: darkTheme ? 0x0 : 0xffffff,
    lowlightColor: darkTheme ? 0x0 : 0xffffff,
    baseColor: darkTheme ? 0x0 : 0xffffff,
    zoom: 0.6,
  };
};

export default function SectionCard(props) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  const [fade, setFade] = useState<boolean>(false);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG(getVantaEffectProperties(vantaRef, resolvedTheme)));
    } else {
      setFade(true);
      setTimeout(() => {
        setVantaEffect(FOG(getVantaEffectProperties(vantaRef, resolvedTheme)));
        setFade(false);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    return () => vantaEffect?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={vantaRef}
      className={`section-card ${fade ? "fade-out" : "fade-in"}`}
    >
      {props.children}
    </div>
  );
}
