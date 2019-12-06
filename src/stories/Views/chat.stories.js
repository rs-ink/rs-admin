import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import Chat from "../../views/Chat";


storiesOf("Views/聊天", module)
    .add("聊天", () =>
        <AuthLayout component={Chat} />
    );

