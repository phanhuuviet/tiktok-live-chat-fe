import { Navigate } from 'react-router-dom';

import useUserInfo from '~/modules/auth/redux/hooks/useUserInfo';
import NotFound from '~/modules/public/features/not-found';
import { authStorage } from '~/utils/auth';

const RoleBasedRoute = ({ children, allowedRoles = [] }) => {
    // const token = localStorage.getItem('accessToken');
    // const user = JSON.parse(localStorage.getItem('user') || '{}');
    const {
        data: { userInfo },
    } = useUserInfo();

    if (!authStorage.isAuthenticated()) {
        return <Navigate to="/login" />;
    }

    if (allowedRoles.length && !allowedRoles.includes(userInfo?.role)) {
        return <NotFound />;
    }

    return children;
};

export default RoleBasedRoute;
