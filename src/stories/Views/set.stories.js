import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import {General,Subscription,Notifications,Security} from "../../views/Settings/components";


storiesOf("Views/系统设置", module)
    .add("通用", () =>
        <AuthLayout component={General} />
    );
storiesOf("Views/系统设置", module)
    .add("订阅", () =>
        <AuthLayout component={Subscription} />
    );
storiesOf("Views/系统设置", module)
    .add("通知", () =>
        <AuthLayout component={Notifications} />
    );
storiesOf("Views/系统设置", module)
    .add("安全", () =>
        <AuthLayout component={Security} />
    );

