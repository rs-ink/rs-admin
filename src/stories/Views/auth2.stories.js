import {storiesOf} from "@storybook/react";
import React from "react";
import Login from "../../views/Login";
import AuthLayout from "../layout/AuthLayout";


storiesOf("Views/Auth2", module)
    .add("登录页", () => <AuthLayout component={Login} selfRedirect={true}/>);



