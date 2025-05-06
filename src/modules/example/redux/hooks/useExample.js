import { get } from 'lodash-es';
import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import exampleActions from '../actions/example';

export const useExample = () => {
    const data = useSelector((state) => get(state, 'example.example'));

    const dispatch = useDispatch();
    const actions = useMemo(() => bindActionCreators(exampleActions, dispatch), [dispatch]);

    return {
        actions,
        data,
    };
};
