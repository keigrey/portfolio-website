import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import MailCard from "./components/MailCard";
import FilmGrain from "./components/FilmGrain";
import SectionCard from "./components/SectionCard";
import Clouds from "./components/Clouds";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["mail", "common"])),
    },
  };
}

export default function Mail() {
  const [mounted, setMounted] = useState(false);

  const { t } = useTranslation("mail");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Mail | Sergei Koshelev</title>
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
        <SectionCard>
          <Clouds />
          <MailCard />
        </SectionCard>
      </div>
    </>
  );
}
