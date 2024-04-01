import { t } from "i18next";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { course_link } from "../../globals";

const ProjectDescription = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-5xl font-bold font-sans text-white">
        {t("project-description.title")}
      </h1>
      <p className="text-3xl font-sans text-white">
        {t("project-description.what-is-it")}
      </p>
    </div>
  );
};

export default ProjectDescription;
