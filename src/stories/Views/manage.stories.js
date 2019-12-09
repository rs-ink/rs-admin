import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import CustomerManagementList from "../../views/CustomerManagementList";
import OrderManagementList from "../../views/OrderManagementList";
import OrderManagementDetails from "../../views/OrderManagementDetails";
import {Summary} from "../../views/CustomerManagementDetails/components";
import ProjectManagementList from "../../views/ProjectManagementList";


storiesOf("Views/管理", module)
    .add("客户（列表）", () =>
        <AuthLayout component={CustomerManagementList} />
    );
storiesOf("Views/管理", module)
    .add("客户详情", () =>
        <AuthLayout component={Summary} />
    );
storiesOf("Views/管理", module)
    .add("项目列表", () =>
        <AuthLayout component={ProjectManagementList} />
    );
storiesOf("Views/管理", module)
    .add("订单列表", () =>
        <AuthLayout component={OrderManagementList} />
    );
storiesOf("Views/管理", module)
    .add("订单详情", () =>
        <AuthLayout component={OrderManagementDetails} />
    );

