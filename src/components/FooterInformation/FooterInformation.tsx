import { t } from "i18next";
import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { course_link } from "../../globals";
import "./FooterInformation.css";

const FooterInformation = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  return (
    <footer className="fixed bg-green bottom-0 left-0 right-0 p-2 text-center">
      <p className="text-md font-medium text-grafite">
        <Trans
          i18nKey="project-description.course-reference"
          components={{
            link1: <a href={course_link} />,
          }}
        />
      </p>
      <p className="text-sm font-medium text-darkGrey">
        {t("project-description.authors")}
      </p>
    </footer>
  );
};

export default FooterInformation;
