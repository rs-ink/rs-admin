import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import Presentation from "../../views/Presentation";


storiesOf("Views/演示", module)
    .add("演示", () =>
        <AuthLayout component={Presentation} />
    );

