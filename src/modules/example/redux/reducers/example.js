import {
    EXAMPLE_ACTION,
    EXAMPLE_ACTION_SUCCESS,
    EXAMPLE_ACTION_FAILURE,
} from '~/modules/example/redux/actions/example';

const initialState = {
    isLoading: false,
    data: [],
};

export default function example(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_ACTION:
            return {
                ...state,
                isLoading: true,
            };
        case EXAMPLE_ACTION_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
            };
        case EXAMPLE_ACTION_FAILURE:
            return {
                ...state,
                data: [],
                isLoading: false,
            };
        default:
            return state;
    }
}
