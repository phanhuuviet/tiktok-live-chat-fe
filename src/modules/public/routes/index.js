import Unauthorized from '../features/unauthorized/index.jsx';

import { ROUTE } from './config.js';

const routes = [
    {
        name: ROUTE.UNAUTHORIZE.TITLE,
        path: ROUTE.UNAUTHORIZE.PATH,
        component: Unauthorized,
        layout: null,
        isPrivate: false,
    },
];

export default routes;
