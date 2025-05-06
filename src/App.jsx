import './App.css';
import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppProvider } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import NotFound from './modules/public/features/not-found';
import appRoutes from './routes';
import i18n from './utils/i18n';

import store from '~/stores';

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <ReduxProvider store={store}>
                <AppProvider>
                    <BrowserRouter>
                        <Routes>
                            {appRoutes.map(({ path, component, layout }) => {
                                const Layout = layout || MainLayout;

                                const wrappedElement = <Layout>{component}</Layout>;

                                return <Route key={path} path={path} element={wrappedElement} />;
                            })}
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </AppProvider>
            </ReduxProvider>
        </I18nextProvider>
    );
}

export default App;
