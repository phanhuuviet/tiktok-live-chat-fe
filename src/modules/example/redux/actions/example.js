export const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
export const EXAMPLE_ACTION_SUCCESS = 'EXAMPLE_ACTION_SUCCESS';
export const EXAMPLE_ACTION_FAILURE = 'EXAMPLE_ACTION_FAILURE';

export const exampleAction = (payload) => ({
    type: EXAMPLE_ACTION,
    payload,
});

export const exampleActionSuccess = (payload) => ({
    type: EXAMPLE_ACTION_SUCCESS,
    payload,
});

export const exampleActionFailure = (payload) => ({
    type: EXAMPLE_ACTION_FAILURE,
    payload,
});

export default {
    exampleAction,
    exampleActionSuccess,
    exampleActionFailure,
};
