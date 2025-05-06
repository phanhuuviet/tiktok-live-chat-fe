import { combineReducers } from 'redux';

import authReducers from '~/modules/auth/redux/reducers';
import exampleReducers from '~/modules/example/redux/reducers';

export default combineReducers({
    example: exampleReducers,
    auth: authReducers,
});
