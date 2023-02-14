import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSelector from "./components/LanguageSelector";
import ThemeButton from "./components/ThemeButton";
import NameCard from "./components/NameCard";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about", "common"])),
    },
  };
}

export default function Home() {
  const [mounted, setMounted] = useState(false);

  const { locale, locales = [], push } = useRouter();

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
        <title>Home | Sergei Koshelev</title>
        <meta
          name="description"
          content="Sergei Koshelev is a software engineer with an interest in making music and learning to do things he cannot yet do"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NameCard />
      </main>
    </>
  );
}
