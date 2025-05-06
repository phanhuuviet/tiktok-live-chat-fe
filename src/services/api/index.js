import axios from 'axios';

import { ResponseCode } from '~/common/constants/response-code';
import { validateStatus } from '~/utils/api';
import { authStorage } from '~/utils/auth';

const BASE_URL = import.meta.env.VITE_REACT_APP_HOST + '/api';

const HEADERS_MULTIPLE_PART = {
    'Content-Type': 'multipart/form-data; boundary=something',
};

const REFRESH_TOKEN_URL = '___API___';

export const createInstance = (baseURL) => {
    const api = axios.create({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });

    api.interceptors.request.use(
        (config) => {
            const token = authStorage.getAccessToken();
            if (token) config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        (error) => Promise.reject(error),
    );

    let isRefreshing = false;

    api.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            const refreshToken = authStorage.getRefreshToken();

            if (error.response?.status === ResponseCode.FORBIDDEN && !originalRequest._retry && refreshToken) {
                originalRequest._retry = true;

                if (!isRefreshing) {
                    isRefreshing = true;
                    try {
                        // const res = await axios.post('https://your-api.com/api/auth/refresh-token', {
                        //     refreshToken: refreshToken,
                        // });
                        const res = await refreshAccessToken();

                        authStorage.setAccessToken(res.data.accessToken);
                        api.defaults.headers.Authorization = `Bearer ${res.data.accessToken}`;
                        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;

                        return api(originalRequest);
                    } catch (refreshError) {
                        console.error('Refresh token failed:', refreshError);
                        authStorage.logout();
                        window.location.href = '/login';
                    } finally {
                        isRefreshing = false;
                    }
                }
            }

            return Promise.reject(error);
        },
    );

    return api;
};

export const createApi = (instance) => ({
    instance,

    post: (endpoint, params) => {
        return instance
            .post(endpoint, params, {
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },

    postMultiplePart: (endpoint, params) => {
        return instance
            .post(endpoint, params, {
                headers: HEADERS_MULTIPLE_PART,
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },

    get: (endpoint, params = {}, options = {}) => {
        return instance
            .get(endpoint, {
                ...options,
                params: params,
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },

    put: (endpoint, params) => {
        return instance
            .put(endpoint, params, {
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },
    putMultiplePart: (endpoint, params) => {
        return instance
            .put(endpoint, params, {
                headers: HEADERS_MULTIPLE_PART,
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },
    patch: (endpoint, params) => {
        return instance
            .patch(endpoint, params, {
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },
    patchMultiplePart: (endpoint, params) => {
        return instance
            .patch(endpoint, params, {
                headers: HEADERS_MULTIPLE_PART,
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },
    delete: (endpoint, params) => {
        return instance
            .delete(endpoint, {
                data: params,
                validateStatus: (status) => validateStatus(status),
            })
            .then(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            )
            .catch(
                (response) => {
                    return response;
                },
                (err) => {
                    return err.response || err;
                },
            );
    },
});

const instance = createInstance(BASE_URL);

export const refreshAccessToken = () => {
    const refreshToken = authStorage.getRefreshToken();
    return instance.get(REFRESH_TOKEN_URL, {
        headers: {
            Authorization: `Bearer ${refreshToken}`,
            'x-auth-token': `Bearer ${refreshToken}`,
        },
    });
};

const api = createApi(instance);

export { api };
