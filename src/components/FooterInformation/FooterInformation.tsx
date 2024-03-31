import { t } from 'i18next';
import React from 'react';
import { useTranslation, Trans } from 'react-i18next'
import { course_link } from '../../globals';
import './FooterInformation.css'

const FooterInformation = () : JSX.Element => {
    const {t, i18n} = useTranslation();
    console.log(i18n.language);
    return (
        <footer className='FooterInformation'>
            <p>
                <Trans
                    i18nKey="project-description.course-reference"
                    components={{
                        link1: <a href={course_link}/>
                    }}
                />
            </p>
            <p>
                {t('project-description.authors')}
            </p>
        </footer>
    );
};

export default FooterInformation;