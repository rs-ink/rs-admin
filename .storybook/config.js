import {addDecorator, addParameters, configure} from '@storybook/react';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';
import {withInfo} from '@storybook/addon-info';
import React from "react";
import * as _addons from "@storybook/addons";
import {createBrowserHistory} from "history";
import {AppLayout} from "../src/App";
import centered from "@storybook/addon-centered/react";
import {withKnobs} from "@storybook/addon-knobs";


const req = require.context('../src/stories', true, /\.stories\.js$/);
const history = createBrowserHistory();

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

let themeWrap = (0, _addons.makeDecorator)({
    name: 'themeWrap',
    parameterName: 'info',
    allowDeprecatedUsage: true,
    wrapper: function wrapper(getStory, context, _ref) {
        return <AppLayout>{getStory()}</AppLayout>
    }
});
addDecorator(themeWrap);
addDecorator(withInfo);
addDecorator(centered);
addDecorator(withKnobs);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    },
});
configure(loadStories, module);
