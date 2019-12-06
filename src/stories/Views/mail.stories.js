import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import Mail from "../../views/Mail";


storiesOf("Views/邮件", module)
    .add("邮件", () =>
        <AuthLayout component={Mail} />
    );

