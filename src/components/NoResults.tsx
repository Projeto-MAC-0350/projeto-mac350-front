import { useTranslation } from "react-i18next";
import React from "react";

type NoResultsProps = {
  setNoResults: (noResults: boolean) => void;
};

function NoResults({ setNoResults }: NoResultsProps) {
  const { t } = useTranslation();

  return (
    <div className="p-8 bg-black py-20 flex flex-col space-y-20 items-center justify-center  w-full overflow-hidden">
      <p className="font-sans text-xl font-medium text-white">
        {t("noResults")}
      </p>
      <button
        onClick={() => {
          setNoResults(false);
        }}
        className="bg-green flex flex-row space-x-2 items-center justify-center rounded-full py-2 pl-2 pr-4 hover:bg-opacity-70 transition-colors duration-100"
      >
        <div className="bg-black h-full rounded-full">
          <svg
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12"
          >
            <path d="M14 7l-5 5 5 5V7z" fill="white" />
            <path d="M19 7l-5 5 5 5V7z" fill="white" />
          </svg>
        </div>
        <p className="font-sans text-xl font-bold text-black">
          {t("tryAgain")}
        </p>
      </button>
    </div>
  );
}

export default NoResults;
