import {addDecorator, addParameters, configure} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withInfo} from '@storybook/addon-info';
import React from "react";
import * as _addons from "@storybook/addons";
import {createBrowserHistory} from "history";
import {configureStore} from "../src/store";
import {AppLayOut} from "../src/App";



const req = require.context('../src/stories', true, /\.stories\.js$/);
const history = createBrowserHistory();
const store = configureStore();

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

let themeWrap = (0, _addons.makeDecorator)({
    name: 'themeWrap',
    parameterName: 'info',
    allowDeprecatedUsage: true,
    wrapper: function wrapper(getStory, context, _ref) {
        // return <StoreProvider store={store}>
        //     <ThemeProvider theme={theme}>
        //         <MuiPickersUtilsProvider utils={MomentUtils}>
        //             <Router history={history}>
        //                 {getStory()}
        //             </Router>
        //         </MuiPickersUtilsProvider>
        //     </ThemeProvider>
        // </StoreProvider>;
        return <AppLayOut>{getStory()}</AppLayOut>
    }
});
addDecorator(withInfo);
addDecorator(themeWrap);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    },
});
configure(loadStories, module);
