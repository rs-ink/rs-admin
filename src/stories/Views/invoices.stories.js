import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import InvoiceDetails from "../../views/InvoiceDetails";


storiesOf("Views/发票", module)
    .add("发票", () =>
        <AuthLayout component={InvoiceDetails} />
    );

