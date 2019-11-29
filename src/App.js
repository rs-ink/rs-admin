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



export const AppLayOut = ({children})=>{

    const history = createBrowserHistory();
    const store = configureStore();

   return (
       <StoreProvider store={store}>
           <ThemeProvider theme={theme}>
               <MuiPickersUtilsProvider utils={MomentUtils}>
                   <Router history={history}>
                       {children}
                   </Router>
               </MuiPickersUtilsProvider>
           </ThemeProvider>
       </StoreProvider>)
       ;
};


const App = () => {
    return (
        <AppLayOut>
            <ScrollReset/>
            <GoogleAnalytics/>
            {/*<CookiesNotification />*/}
            {renderRoutes(routes)}
        </AppLayOut>
    );
};

export default App;
