import {storiesOf} from "@storybook/react";
import React from "react";
import Overview from "../../views/Overview";
import AuthLayout from "../layout/AuthLayout";


storiesOf("Views/主页", module)
    .add("主页", () =>
        <AuthLayout component={Overview} />
    );

