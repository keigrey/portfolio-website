import Head from "next/head";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import HobbiesCard from "./components/HobbiesCard";
import FilmGrain from "./components/FilmGrain";
import SectionCard from "./components/SectionCard";
import Clouds from "./components/Clouds";

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

export default function Hobbies({
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
        <title>Hobbies | Sergei Koshelev</title>
        <meta
          name="description"
          content="Explore Sergei Koshelev's hobbies and creative pursuits, such as making music, writing poetry and others. Sergei is a lifelong learner who enjoys reading and discovering new things, and his hobbies reflect his passion for creativity and self-expression. Explore Sergei's hobbies now and discover a different side of this talented software engineer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="About | Sergei Koshelev" />
        <meta
          property="og:description"
          content="Explore Sergei Koshelev's hobbies and creative pursuits, such as making music, writing poetry and others. Sergei is a lifelong learner who enjoys reading and discovering new things, and his hobbies reflect his passion for creativity and self-expression. Explore Sergei's hobbies now and discover a different side of this talented software engineer."
        />
        <meta
          property="og:image"
          content="https://www.sergeikoshelev.com/sharingdefault.jpg"
        />
        <meta
          property="og:url"
          content="https://www.sergeikoshelev.com/hobbies"
        />
        <meta property="og:type" content="website" />
        <meta
          property="linkedin:author"
          content="https://www.linkedin.com/in/sergeikoshelev/"
        />
        <meta property="profile:username" content="keigrey" />
      </Head>
      <div className="container">
        <NameCard
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioPlayer={audioPlayer}
          isVertical={isVertical}
        />
        <SectionCard>
          <HobbiesCard />
        </SectionCard>
      </div>
    </>
  );
}
