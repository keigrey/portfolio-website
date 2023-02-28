import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function ThemeButton({ mode }: { mode: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();

  const { t } = useTranslation("common");

  return (
    <>
      <button
        className={`theme-button ${resolvedTheme === mode ? "active" : ""}`}
        onClick={() => setTheme(mode)}
      >
        {mode === "dark" ? t("night") : t("day")}
      </button>
    </>
  );
}

export default ThemeButton;
