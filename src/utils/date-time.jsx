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

export const formatTimestampToVietnamTime = (timestamp) => {
    const date = new Date(+timestamp);

    // Chuyển sang giờ UTC+7 (Việt Nam)
    const utcTimestamp = date.getTime();
    const vietnamOffset = 7 * 60 * 60 * 1000; // UTC+7 in milliseconds
    const vietnamDate = new Date(utcTimestamp + vietnamOffset);

    const day = String(vietnamDate.getUTCDate()).padStart(2, '0');
    const month = String(vietnamDate.getUTCMonth() + 1).padStart(2, '0');
    const year = vietnamDate.getUTCFullYear();

    const seconds = String(vietnamDate.getUTCSeconds()).padStart(2, '0');
    const minutes = String(vietnamDate.getUTCMinutes()).padStart(2, '0');
    const hours = String(vietnamDate.getUTCHours()).padStart(2, '0');

    return `${day}/${month}/${year} ${seconds}-${minutes}-${hours}`;
}