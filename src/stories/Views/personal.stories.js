import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import {Connections, Reviews, Timeline,Projects} from "../../views/Profile/components";



storiesOf("Views/个人详情", module)
    .add("时间线", () =>
        <AuthLayout component={Timeline} />
    );
storiesOf("Views/个人详情", module)
    .add("消息", () =>
        <AuthLayout component={Connections} />
    );
storiesOf("Views/个人详情", module)
    .add("项目", () =>
        <AuthLayout component={Projects} />
    );
storiesOf("Views/个人详情", module)
    .add("回顾", () =>
        <AuthLayout component={Reviews} />
    );


