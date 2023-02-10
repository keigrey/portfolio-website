import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { FC } from "react";

// export async function getStaticProps({ locale }: { locale: string }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//     },
//   };
// }

function ThemeButton({ mode }: { mode: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation("common");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <h1>{t("night")}</h1>
      <button onClick={() => setTheme(mode)}>
        {mode === "dark" ? t("night") : t("day")}
      </button>
    </>
  );
}

export default ThemeButton;
///////////////////////////
