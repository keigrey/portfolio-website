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
    highlightColor: darkTheme ? 0xffffff : 0xd9bc60,
    midtoneColor: darkTheme ? 0xaeaeae : 0xca2f1c,
    lowlightColor: darkTheme ? 0x0 : 0x6041ea,
    baseColor: darkTheme ? 0x0 : 0x82d18a,
    zoom: 0.6,
  };
};

export default function SectionCard(props) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG(getVantaEffectProperties(vantaRef, resolvedTheme)));
    } else {
      vantaEffect.destroy();
      setVantaEffect(FOG(getVantaEffectProperties(vantaRef, resolvedTheme)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  useEffect(() => {
    return () => vantaEffect?.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={vantaRef} className="section-card">
      {props.children}
    </div>
  );
}
