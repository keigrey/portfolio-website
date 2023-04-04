import React from "react";
import { useRouter } from "next/router";

function LanguageSelector() {
  const { locale, locales = [], push, asPath } = useRouter();

  const handleClick = (l: string) => {
    push(asPath, undefined, { locale: l });
  };

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
