import { useEffect } from 'react';
import { createContext } from 'react';

import useUserInfo from '~/modules/auth/redux/hooks/useUserInfo';
import { authStorage } from '~/utils/auth';

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const { actions } = useUserInfo();

    const isAuthenticated = authStorage.isAuthenticated();

    useEffect(() => {
        if (isAuthenticated) {
            actions.getUserInfo();
        }
    }, [actions, isAuthenticated]);

    return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default AppContext;
