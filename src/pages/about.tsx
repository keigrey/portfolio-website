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

export default function About({
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
        <title>About | Sergei Koshelev</title>
        <meta
          name="description"
          content="Meet Sergei Koshelev, a trilingual software engineer with a passion for problem-solving and technology. With a degree in Railway Engineering and training from Code Chrysalis, Sergei is a full-stack developer proficient in JavaScript and experienced in working with diverse teams. He enjoys programming, as well as pursuing creative outlets such as making music and writing poetry. Sergei is a lifelong learner who stays up-to-date with the latest industry trends and is excited about the future of technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="About | Sergei Koshelev" />
        <meta
          property="og:description"
          content="Meet Sergei Koshelev, a trilingual software engineer with a passion for problem-solving and technology. With a degree in Railway Engineering and training from Code Chrysalis, Sergei is a full-stack developer proficient in JavaScript and experienced in working with diverse teams. He enjoys programming, as well as pursuing creative outlets such as making music and writing poetry. Sergei is a lifelong learner who stays up-to-date with the latest industry trends and is excited about the future of technology."
        />
        <meta
          property="og:image"
          content="https://www.sergeikoshelev.com/sharingdefault.jpg"
        />
        <meta
          property="og:url"
          content="https://www.sergeikoshelev.com/about"
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
          <AboutCard />
        </SectionCard>
      </div>
    </>
  );
}
