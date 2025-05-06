import { call, put, takeLatest } from 'redux-saga/effects';

import { exampleActionFailure, exampleActionSuccess, EXAMPLE_ACTION } from '~/modules/example/redux/actions/example';
import { api } from '~/services/api';

export const getExampleDataApi = (params) => {
    const uri = `___API___/${params?.id}`;
    return api.get(uri);
};

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doGetDataExample(action) {
    try {
        const response = yield call(getExampleDataApi, action?.payload);

        if (response?.statusCode === 200) {
            yield put(exampleActionSuccess(response?.data));

            // Call callback action if provided
            if (action?.onSuccess) {
                action.onSuccess(response?.data);
            }
        } else {
            throw new Error(response?.message);
        }
    } catch (error) {
        console.log('doGetDataExampleError', error);
        yield put(exampleActionFailure());
        // Call callback action if provided
        if (action.onError) {
            yield action.onError();
        }
    }
}

export default function* watchGetDataExample() {
    yield takeLatest(EXAMPLE_ACTION, doGetDataExample);
}
