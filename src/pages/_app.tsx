import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import "@/styles/globals.css";
import "../styles/theme.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import FilmGrain from "./components/FilmGrain";
import SectionCard from "./components/SectionCard";
import Clouds from "./components/Clouds";
import SmallMoon from "./components/SmallMoon";
import { motion, AnimatePresence } from "framer-motion";
import Moon from "./components/Moon";
import LoadingLogo from "./components/LoadingLogo";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState<{
    width: undefined | number;
    height: undefined | number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const audioPlayer = useRef<HTMLAudioElement>(null);

  const size = useWindowSize();

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.5 },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <FilmGrain />
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loadingScreen"
            animate={animation.animate}
            exit={animation.exit}
            transition={animation.transition}
            className="loading-screen"
          >
            <LoadingLogo />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={animation.initial}
            animate={animation.animate}
            transition={animation.transition}
          >
            <div className="container-layout">
              <SectionCard>
                <Clouds />
              </SectionCard>
              <div className="name-card-placeholder"></div>
              <AnimatePresence mode="wait">
                {asPath === "/" ? (
                  <Moon
                    key="moon"
                    isVertical={size.width && size.width < 768}
                  />
                ) : (
                  <SmallMoon
                    key="small-moon"
                    isVertical={size.width && size.width < 768}
                  />
                )}
              </AnimatePresence>
            </div>
            <audio ref={audioPlayer} src="/assets/bgm.mp3" loop></audio>
            <AnimatePresence mode="wait">
              <Component
                key={`${asPath}Component`}
                {...pageProps}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audioPlayer={audioPlayer}
                isVertical={size.width && size.width < 768}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
