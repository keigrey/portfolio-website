import Head from "next/head";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import ProjectsCard from "./components/ProjectsCard";
import FilmGrain from "./components/FilmGrain";
import Clouds from "./components/Clouds";
import SectionCard from "./components/SectionCard";
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

export default function Projects({
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
        <title>Projects | Sergei Koshelev</title>
        <meta
          name="description"
          content="Discover Sergei Koshelev's latest web and mobile app development projects. Browse his portfolio and see how he can help bring your ideas to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="About | Sergei Koshelev" />
        <meta
          property="og:description"
          content="Discover Sergei Koshelev's latest web and mobile app development projects. Browse his portfolio and see how he can help bring your ideas to life."
        />
        <meta
          property="og:image"
          content="https://www.sergeikoshelev.com/sharingdefault.jpg"
        />
        <meta
          property="og:url"
          content="https://www.sergeikoshelev.com/projects"
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
          <ProjectsCard />
        </SectionCard>
      </div>
    </>
  );
}
