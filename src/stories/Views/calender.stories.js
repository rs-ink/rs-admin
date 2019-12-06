import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import Calendar from "../../views/Calendar";


storiesOf("Views/日历", module)
    .add("日历", () =>
        <AuthLayout component={Calendar} />
    );

