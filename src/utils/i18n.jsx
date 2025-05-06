import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import viGeneral from '~/assets/locales/vi/general.json';
import { DEFAULT_LANG, LANG_OPTIONS } from '~/common/constants';

const resources = {
    [LANG_OPTIONS.VI]: {
        general: viGeneral,
    },
};

const getCurrentLang = () => {
    let language = window.localStorage.getItem('language');

    if (Object.values(LANG_OPTIONS).every((lang) => lang !== language)) {
        window.localStorage.setItem('language', DEFAULT_LANG);
        language = DEFAULT_LANG;
    }

    return language;
};

i18n.use(initReactI18next).init({
    resources: resources,
    lng: getCurrentLang(),
    fallbackLng: DEFAULT_LANG,
    ns: ['general'],
    defaultNS: ['general'],
    interpolation: {
        escapeValue: false,
    },
    debug: false,
    react: {
        useSuspense: true,
        wait: true,
    },
});

export default i18n;
