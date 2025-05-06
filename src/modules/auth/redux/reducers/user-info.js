import {
    GET_USER_INFO_FAILED,
    GET_USER_INFO_START,
    GET_USER_INFO_SUCCESS,
    RESET_USER_INFO_STATE,
} from '~/modules/auth/redux/actions/user-info';

const initialState = {
    isLoading: false,
    userInfo: {},
};

/**
 * reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function userInfo(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO_START:
            return {
                ...state,
                isLoading: true,
            };
        case GET_USER_INFO_SUCCESS:
            return {
                ...state,
                userInfo: action.payload,
                isLoading: false,
            };
        case GET_USER_INFO_FAILED:
            return {
                ...state,
                isLoading: false,
            };
        case RESET_USER_INFO_STATE:
            return {
                ...state,
                userInfo: {},
            };
        default:
            return state;
    }
}
