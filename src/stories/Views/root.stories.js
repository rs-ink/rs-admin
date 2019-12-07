import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import NavBar from "../../layouts/Dashboard/components/NavBar";


storiesOf("Views/Menu", module)
    .add("路由", () =>
        <AuthLayout component={NavBar} />
    );

