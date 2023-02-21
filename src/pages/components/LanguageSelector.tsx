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
        {/* <select value={locale} onChange={(e) => handleClick(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
          <option value="ja">ja</option>
        </select> */}
        <button className="dropdown-button">{locale}</button>
        <div className="dropdown-content">
          {locales.map((l) => (
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
