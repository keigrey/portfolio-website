import Head from "next/head";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import ContactCard from "./components/ContactCard";
import FilmGrain from "./components/FilmGrain";
import SectionCard from "./components/SectionCard";
import Clouds from "./components/Clouds";
import SmallMoon from "./components/SmallMoon";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about",
        "resume",
        "projects",
        "hobbies",
        "contact",
      ])),
    },
  };
}

export default function Mail({
  isPlaying,
  setIsPlaying,
  audioPlayer,
  isVertical,
}) {
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
        <title>Contact | Sergei Koshelev</title>
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
          isVertical={isVertical}
        />
        <SectionCard>
          <ContactCard />
        </SectionCard>
      </div>
    </>
  );
}
