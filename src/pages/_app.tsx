import React, { useState, useRef } from "react";
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

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioPlayer = useRef<HTMLAudioElement>(null);

  return (
    <ThemeProvider>
      <FilmGrain />
      <div className="container-layout">
        <SectionCard>
          <Clouds />
        </SectionCard>
        <div className="name-card-placeholder"></div>
        <AnimatePresence>
          {asPath === "/" ? (
            <Moon key="moon" />
          ) : (
            <SmallMoon key="small-moon" />
          )}
        </AnimatePresence>
      </div>
      <audio ref={audioPlayer} src="/assets/bgm.mp3" loop></audio>
      <Component
        {...pageProps}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioPlayer={audioPlayer}
      />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
