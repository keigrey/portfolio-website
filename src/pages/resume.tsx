import Head from "next/head";
import { useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import ResumeCard from "./components/ResumeCard";
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

export default function Resume({
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
        <title>Resume | Sergei Koshelev</title>
        <meta
          name="description"
          content="Download Sergei Koshelev's resume and discover how his experience and skill set can benefit your organization. As a software engineer with a passion for practical solutions, Sergei specializes in web and mobile app development with a focus on JavaScript and Python. His resume includes details about his education, work experience, and technical skills, making it an essential resource for anyone looking to work with a talented and dedicated software engineer. Download Sergei's resume now and see how he can help bring your ideas to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="About | Sergei Koshelev" />
        <meta
          property="og:description"
          content="Download Sergei Koshelev's resume and discover how his experience and skill set can benefit your organization. As a software engineer with a passion for practical solutions, Sergei specializes in web and mobile app development with a focus on JavaScript and Python. His resume includes details about his education, work experience, and technical skills, making it an essential resource for anyone looking to work with a talented and dedicated software engineer. Download Sergei's resume now and see how he can help bring your ideas to life."
        />
        <meta
          property="og:image"
          content="https://www.sergeikoshelev.com/sharingdefault.jpg"
        />
        <meta
          property="og:url"
          content="https://www.sergeikoshelev.com/resume"
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
          <ResumeCard />
        </SectionCard>
      </div>
    </>
  );
}
