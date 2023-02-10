import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

function ThemeButton({ mode }: { mode: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button onClick={() => setTheme(mode)}>
        {mode === "dark" ? "NIGHT" : "DAY"}
      </button>
    </>
  );
}

export default ThemeButton;
///////////////////////////
