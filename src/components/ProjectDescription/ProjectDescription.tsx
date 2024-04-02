import React from "react";
import { useTranslation } from "react-i18next";

const ProjectDescription = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-4 items-center justify-center">
      <img alt="spotify-logo" src="images/spotify-logo.svg" className="h-40" />
      <h1 className="text-5xl max-w-3xl w-full font-bold font-sans text-white">
        {t("project-description.title")}
      </h1>
      <p className="text-3xl max-w-3xl w-full  font-sans text-white">
        {t("project-description.what-is-it")}
      </p>
    </div>
  );
};

export default ProjectDescription;
