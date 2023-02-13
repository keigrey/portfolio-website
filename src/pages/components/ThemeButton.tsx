import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function ThemeButton({ mode }: { mode: string }) {
  const { theme, setTheme } = useTheme();

  const { t } = useTranslation("common");

  return (
    <>
      <button onClick={() => setTheme(mode)}>
        {mode === "dark" ? t("night") : t("day")}
      </button>
    </>
  );
}

export default ThemeButton;
