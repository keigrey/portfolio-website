import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import IndexCard from "./components/IndexCard";
import SectionCard from "./components/SectionCard";

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

export default function Home({
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
        <title>Home | Sergei Koshelev</title>
        <meta
          name="description"
          content="Hey there, I'm Sergei Koshelev - a software engineer with a passion for creating practical solutions. Check out my portfolio website to see my latest projects in web and mobile app development. I specialize in JavaScript and Python, and I'm always looking for exciting new projects to work on. Let's connect and see how I can help bring your ideas to life!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Home | Sergei Koshelev" />
        <meta
          property="og:description"
          content="Hey there, I'm Sergei Koshelev - a software engineer with a passion for creating practical solutions. Check out my portfolio website to see my latest projects in web and mobile app development. I specialize in JavaScript and Python, and I'm always looking for exciting new projects to work on. Let's connect and see how I can help bring your ideas to life!"
        />
        <meta
          property="og:image"
          content="https://www.sergeikoshelev.com/sharingdefault.jpg"
        />
        <meta property="og:url" content="https://www.sergeikoshelev.com/" />
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
          <IndexCard />
        </SectionCard>
      </div>
    </>
  );
}
