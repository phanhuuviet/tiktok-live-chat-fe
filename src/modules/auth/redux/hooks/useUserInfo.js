import { get } from 'lodash-es';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import userInfoActions from '~/modules/auth/redux/actions/user-info';

const useUserInfo = () => {
    const data = useSelector((state) => get(state, 'auth.userInfo'));

    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(userInfoActions, dispatch), [dispatch]);
    return {
        actions,
        data,
    };
};

export default useUserInfo;
