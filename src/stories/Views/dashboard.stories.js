import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import DashboardDefault from "../../views/DashboardDefault";
import DashboardAnalytics from "../../views/DashboardAnalytics";


storiesOf("Views/Dashboard", module)
    .add("监控页", () =>
        <AuthLayout component={DashboardDefault} />
    );
storiesOf("Views/Dashboard", module)
    .add("分析", () =>
        <AuthLayout component={DashboardAnalytics} />
    );

