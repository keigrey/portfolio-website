import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { locale, locales = [], push } = useRouter();

  const handleClick = (l: string) => {
    push("/", undefined, { locale: l });
  };

  const { t } = useTranslation("about");
  return (
    <>
      <div className="language-selector">
        <button className="dropdown-button">{locale}</button>
        <div className="dropdown-content">
          {locales
            .filter((l) => l !== locale)
            .map((l) => (
              <button key={l} onClick={() => handleClick(l)}>
                {l}
              </button>
            ))}
        </div>
      </div>
    </>
  );
}

export default LanguageSelector;
