import { all } from 'redux-saga/effects';

import watchGetDataExample from './example/get-data-example';

export default function* sagas() {
    yield all([watchGetDataExample()]);
}
