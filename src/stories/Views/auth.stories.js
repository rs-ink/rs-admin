import {storiesOf} from "@storybook/react";
import React, {Fragment, Suspense} from "react";
import Login from "../../views/Login";
import EncodeLogin from "../../views/EncodeLogin";
import Register from "../../views/Register";
import AuthLayout from "../layout/AuthLayout";


storiesOf("Views/Auth", module)
    .add("登录页", () =>
        <AuthLayout component={Login} />
    );
storiesOf("Views/Auth", module).add("扫码登录", () =>
    <AuthLayout component={EncodeLogin} redirectUrl={"http://127.0.0.1:3000"} selfRedirect={true}/>
);
storiesOf("Views/Auth", module).add("注册页面", () =>
    <AuthLayout component={Register} />
    );

