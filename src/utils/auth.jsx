import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_KEY } from '../common/constants';

export const authStorage = {
    login({ accessToken, refreshToken, user }) {
        localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    logout() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    getAccessToken() {
        return localStorage.getItem(ACCESS_TOKEN_KEY);
    },

    setAccessToken(token) {
        return localStorage.setItem(ACCESS_TOKEN_KEY, token);
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY);
    },

    setRefreshToken(refreshToken) {
        return localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    },

    getUser() {
        const user = localStorage.getItem(USER_KEY);
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated() {
        return !!localStorage.getItem(ACCESS_TOKEN_KEY);
    },
};
