import {configure, addDecorator, addParameters} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withInfo} from '@storybook/addon-info';
import {ThemeProvider} from "@material-ui/styles";
import {Provider as StoreProvider} from "react-redux";
import React from "react";
import theme from '../src/theme';
import * as _addons from "@storybook/addons";

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

let themeWrap = (0, _addons.makeDecorator)({
    name: 'themeWrap',
    parameterName: 'info',
    allowDeprecatedUsage: true,
    wrapper: function wrapper(getStory, context, _ref) {
        return  <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>;
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
