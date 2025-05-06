import { all } from 'redux-saga/effects';

import watchGetUserInfo from './user-info/get-user-info';

export default function* sagas() {
    yield all([watchGetUserInfo()]);
}
