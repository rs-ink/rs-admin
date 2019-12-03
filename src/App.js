import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
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
import {configureStore} from "./store";
import {AxiosProvider} from "react-axios";
import axiosInstance from "utils/axios"
import {Router} from "react-router";
import {getLocale} from './utils/locale';
import LocaleProvider from "./components/LocaleProvider";

export const AppLayOut = ({children}) => {
    const history = createBrowserHistory();
    const store = configureStore({}, history);
    const locale = getLocale();
    return (
        <LocaleProvider locale={locale}>
            <AxiosProvider instance={axiosInstance}>
                <StoreProvider store={store}>
                    <ThemeProvider theme={theme}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            <Router history={history}>
                                {children}
                            </Router>
                        </MuiPickersUtilsProvider>
                    </ThemeProvider>
                </StoreProvider>
            </AxiosProvider>
        </LocaleProvider>
    );
};

const App = () => {
    return (
        <AppLayOut>
            <ScrollReset/>
            {/*<GoogleAnalytics/>*/}
            {/*<CookiesNotification />*/}
            {renderRoutes(routes)}
        </AppLayOut>
    );
};

export default App;
