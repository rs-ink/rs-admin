import {storiesOf} from "@storybook/react";
import {Markdown} from "../components";
import React from "react";

import readme from "../../README.md"

storiesOf("docs", module)
    .add("readme", () => <Markdown source={readme}/>);
