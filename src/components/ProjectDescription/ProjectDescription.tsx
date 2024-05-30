import React from "react";
import { useTranslation } from "react-i18next";

const ProjectDescription = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col space-y-8 items-center justify-center">
      <img alt="spotify-logo" src="images/spotigraph.png" className="h-24" />
      <h1 className="text-5xl text-center max-w-3xl w-full font-bold font-sans text-white">
        {t("project-description.title")}
      </h1>
      <p className="text-3xl max-w-3xl w-full text-center font-sans text-white">
        {t("project-description.what-is-it")}
      </p>
    </div>
  );
};

export default ProjectDescription;
