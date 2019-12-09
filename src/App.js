import React from 'react';
import {createBrowserHistory} from 'history';
import MomentUtils from '@date-io/moment';
import {ThemeProvider} from '@material-ui/styles';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {renderRoutes} from 'react-router-config';
import theme from 'theme';
import routes from 'routes';
import {ScrollReset,} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';

import {AxiosProvider} from "react-axios";
import axiosInstance from "utils/axios"
import {Router} from "react-router";
import {getLocale} from './utils/locale';
import LocaleProvider from "./components/LocaleProvider";
import SessionContainer from "./auth/SessionContainer";

export const AppLayout = ({children}) => {
    const history = createBrowserHistory();
    const locale = getLocale();
    return (
        <SessionContainer.Provider>
            <LocaleProvider locale={locale}>
                <AxiosProvider instance={axiosInstance}>
                        <ThemeProvider theme={theme}>
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <Router history={history}>
                                    {children}
                                </Router>
                            </MuiPickersUtilsProvider>
                        </ThemeProvider>
                </AxiosProvider>
            </LocaleProvider>
        </SessionContainer.Provider>
    );
};

const App = () => {
    return (
        <AppLayout>
            <ScrollReset/>
            {/*<GoogleAnalytics/>*/}
            {/*<CookiesNotification />*/}
            {renderRoutes(routes)}
        </AppLayout>
    );
};

export default App;
