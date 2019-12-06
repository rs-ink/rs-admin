import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import KanbanBoard from "../../views/KanbanBoard";


storiesOf("Views/看板", module)
    .add("看板", () =>
        <AuthLayout component={KanbanBoard} />
    );

