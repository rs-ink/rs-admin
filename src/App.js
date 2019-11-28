import React from 'react';
import {Router} from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import {createBrowserHistory} from 'history';
import MomentUtils from '@date-io/moment';
import {ThemeProvider} from '@material-ui/styles';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import {renderRoutes} from 'react-router-config';

import theme from 'theme';
import routes from 'routes';
import {
    ScrollReset,
    GoogleAnalytics,
} from './components';
import './mixins/chartjs';
import './mixins/moment';
import './mixins/validate';
import './mixins/prismjs';
import './mock';
import './assets/scss/index.scss';
import {configureStore} from "./store";

const history = createBrowserHistory();
const store = configureStore();

const App = () => {
    return (
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <Router history={history}>
                        <ScrollReset/>
                        <GoogleAnalytics/>
                        {/*<CookiesNotification />*/}
                        {renderRoutes(routes)}
                    </Router>
                </MuiPickersUtilsProvider>
            </ThemeProvider>
        </StoreProvider>
    );
};

export default App;
