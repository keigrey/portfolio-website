import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import ResumeCard from "./components/ResumeCard";
import FilmGrain from "./components/FilmGrain";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["resume", "common"])),
    },
  };
}

export default function Resume() {
  const [mounted, setMounted] = useState(false);

  const { t } = useTranslation("resume");

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
          content="Sergei Koshelev is a software engineer with an interest in making music and learning to do things he cannot yet do"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FilmGrain />
      <div className="container">
        <NameCard />
        <ResumeCard />
      </div>
    </>
  );
}
