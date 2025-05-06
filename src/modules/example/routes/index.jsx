import ExampleMain from '../features/example-main/index.jsx';

import { ROUTE } from './config.jsx';

import RoleBasedRoute from '~/components/RoleBasedRoute';
import MainLayout from '~/layouts/MainLayout.jsx';

const routes = [
    {
        name: ROUTE.EXAMPLE.TITLE,
        path: ROUTE.EXAMPLE.PATH,
        component: (
            <RoleBasedRoute>
                <ExampleMain />
            </RoleBasedRoute>
        ),
        layout: MainLayout,
        isPrivate: true,
    },
];

export default routes;
