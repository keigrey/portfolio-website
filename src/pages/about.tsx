import Head from "next/head";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import AboutCard from "./components/AboutCard";
import SmallMoon from "./components/SmallMoon";
import SectionCard from "./components/SectionCard";
import FilmGrain from "./components/FilmGrain";
import Clouds from "./components/Clouds";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
    },
  };
}

export default function About({ isPlaying, setIsPlaying, audioPlayer }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>About | Sergei Koshelev</title>
        <meta
          name="description"
          content="Sergei Koshelev is a software engineer with an interest in making music and learning to do things he cannot yet do"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <NameCard
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioPlayer={audioPlayer}
        />
        <SectionCard>
          <AboutCard />
        </SectionCard>
      </div>
    </>
  );
}
