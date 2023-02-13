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
      <div>
        <select value={locale} onChange={(e) => handleClick(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
          <option value="ja">ja</option>
        </select>
      </div>
    </>
  );
}

export default LanguageSelector;
