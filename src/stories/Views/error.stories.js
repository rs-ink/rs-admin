import {storiesOf} from "@storybook/react";
import React, {Fragment, Suspense} from "react";
import AuthLayout from "../layout/AuthLayout";
import Error401 from "../../views/Error401";
import Error404 from "../../views/Error404";
import Error500 from "../../views/Error500";


storiesOf("Views/错误页", module)
    .add("401", () =>
        <AuthLayout component={Error401} />
    );
storiesOf("Views/错误页", module)
    .add("404", () =>
        <AuthLayout component={Error404}/>
    );
storiesOf("Views/错误页", module)
    .add("500", () =>
        <AuthLayout component={Error500} />
    );

