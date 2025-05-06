import exampleRoutes from '~/modules/example/routes';
import publicRoutes from '~/modules/public/routes';

const appRoutes = [...exampleRoutes, ...publicRoutes];

export default appRoutes;
