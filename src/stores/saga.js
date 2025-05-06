import { fork } from 'redux-saga/effects';

import authSagas from '~/modules/auth/redux/sagas';
import exampleSagas from '~/modules/example/redux/sagas';

export default function* rootSaga() {
    yield fork(exampleSagas);
    yield fork(authSagas);
}
