import { format } from 'date-fns';
import { enUS, ja, vi } from 'date-fns/locale';

import { DATE_FORMAT_BY_LANG, DATE_TIME_FORMAT_BY_LANG, DEFAULT_LANG, LANG_OPTIONS } from '../common/constants';

export const lang = DEFAULT_LANG;

export const getLocale = () => {
    switch (lang) {
        case LANG_OPTIONS.JP:
            return ja;
        case LANG_OPTIONS.VI:
            return vi;
        case LANG_OPTIONS.EN:
        default:
            return enUS;
    }
};

export const convertUtcDateTimeToLocalTz = (dateTime, formatPattern) => {
    const currFormat = formatPattern || DATE_TIME_FORMAT_BY_LANG[lang];
    return dateTime ? format(new Date(dateTime), currFormat, { locale: getLocale() }) : '';
};

export const convertUtcDateToLocalTz = (date, formatPattern) => {
    const currFormat = formatPattern || DATE_FORMAT_BY_LANG[lang];
    return date ? format(new Date(date), currFormat, { locale: getLocale() }) : '';
};
