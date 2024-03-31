import { t } from 'i18next';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'
import { course_link } from '../../globals';

const ProjectDescription = () : JSX.Element => {
    const {t, i18n} = useTranslation();
    return (
        <div>
            <h1>
                {t('project-description.title')}
            </h1>
            <p>
                {t('project-description.what-is-it')}
            </p>
        </div>
    );
};

export default ProjectDescription;