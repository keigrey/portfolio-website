import React from "react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

interface WindowSizeInterface {
  width: number | undefined;
  height: number | undefined;
}

const getVantaEffectProperties = (
  vantaReference: any,
  currentTheme: string | undefined,
  windowSize: WindowSizeInterface
) => {
  const darkTheme = currentTheme === "dark";
  const zoomValue =
    // @ts-ignore
    windowSize.height < 450 || windowSize.width < 769 ? 0.3 : 0.6;

  return {
    el: vantaReference.current,
    THREE,
    minHeight: 200.0,
    minWidth: 200.0,
    highlightColor: darkTheme ? 0xffffff : 0xd9bc60,
    midtoneColor: darkTheme ? 0xaeaeae : 0xca2f1c,
    lowlightColor: darkTheme ? 0x0 : 0x6041ea,
    baseColor: darkTheme ? 0x0 : 0x82d18a,
    zoom: zoomValue,
  };
};

export default function SectionCard(props) {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef(null);

  const { theme, resolvedTheme } = useTheme();

  const size = useWindowSize();

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG(getVantaEffectProperties(vantaRef, resolvedTheme, size))
      );
    } else {
      setVantaEffect(
        FOG(getVantaEffectProperties(vantaRef, resolvedTheme, size))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, size]);

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

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<WindowSizeInterface>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
