import "@/styles/globals.css";
import "../styles/theme.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { appWithTranslation } from "next-i18next";
import FilmGrain from "./components/FilmGrain";
import NameCard from "./components/NameCard";
import SectionCard from "./components/SectionCard";
import Clouds from "./components/Clouds";
import SmallMoon from "./components/SmallMoon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <FilmGrain />
      <div className="container-layout">
        <SectionCard>
          <Clouds />
        </SectionCard>
        <div className="name-card-placeholder"></div>
        <SmallMoon />
      </div>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
