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
          content="Get in touch with Sergei Koshelev, a software engineer with a passion for practical solutions. Whether you have a question, a project idea, or just want to say hello, you can contact Sergei directly through email or social media. Check out his portfolio to see his latest projects in web and mobile app development, and let him know how he can help bring your ideas to life."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="About | Sergei Koshelev" />
        <meta
          property="og:description"
          content="Get in touch with Sergei Koshelev, a software engineer with a passion for practical solutions. Whether you have a question, a project idea, or just want to say hello, you can contact Sergei directly through email or social media. Check out his portfolio to see his latest projects in web and mobile app development, and let him know how he can help bring your ideas to life."
        />
        <meta
          property="og:image"
          content="https://www.sergeikoshelev.com/sharingdefault.jpg"
        />
        <meta
          property="og:url"
          content="https://www.sergeikoshelev.com/contact"
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
          <ContactCard />
        </SectionCard>
      </div>
    </>
  );
}
