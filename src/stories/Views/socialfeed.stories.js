import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import SocialFeed from "../../views/SocialFeed";


storiesOf("Views/社交", module)
    .add("社交", () =>
        <AuthLayout component={SocialFeed} />
    );

