import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NameCard from "./components/NameCard";
import AboutCard from "./components/AboutCard";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
    },
  };
}

export default function About() {
  const [mounted, setMounted] = useState(false);

  const { t } = useTranslation("about");

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
        <NameCard />
        <AboutCard />
      </div>
    </>
  );
}
