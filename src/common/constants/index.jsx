export const ACCESS_TOKEN_KEY = 'accessToken';
export const REFRESH_TOKEN_KEY = 'refreshToken';
export const USER_KEY = 'user';

export const DEFAULT_LANG = 'vi';

export const LANG_OPTIONS = {
    VI: 'vi',
    EN: 'en',
    JP: 'jp',
};

export const DATE_TIME_FORMAT_BY_LANG = {
    [LANG_OPTIONS.VI]: 'dd/MM/yyyy HH:mm:ss',
    [LANG_OPTIONS.EN]: 'MMM dd, yyyy HH:mm:ss',
    [LANG_OPTIONS.JP]: 'yyyy/MM/dd HH:mm:ss',
};

export const DATE_FORMAT_BY_LANG = {
    [LANG_OPTIONS.VI]: 'dd/MM/yyyy',
    [LANG_OPTIONS.EN]: 'MMM dd, yyyy',
    [LANG_OPTIONS.JP]: 'yyyy/MM/dd',
};
