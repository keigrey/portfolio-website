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

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["about"])),
    },
  };
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // const { locale, locales, push } = useRouter();
  const { locale, locales, push } = useRouter();
  const handleClick = (l: string) => {
    push("/", undefined, { locale: l });
  };

  const { t } = useTranslation("about");

  console.log(locale);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>MyApp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>{t("introduction")}</h1>
        <h1>{locale}</h1>
        {/* <div>
          <h3>Choose your locale</h3>
          {locales.map((l) => (
            <button key={l} onClick={handleClick(l)}>
              {l}
            </button>
          ))}
        </div> */}
        <div>
          <h3>Choose your locale</h3>
          {locales.map((l) => (
            <h4 key={l}>
              <Link href={"/"} locale={l}>
                {l}
              </Link>
            </h4>
          ))}
        </div>
        {/* <div>
          The current theme is: {theme}
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
          <button onClick={() => setTheme("system")}>System</button>
        </div>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="system">System</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select> */}
      </main>
    </>
  );
}
