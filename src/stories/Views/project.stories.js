import {storiesOf} from "@storybook/react";
import React from "react";
import AuthLayout from "../layout/AuthLayout";
import ProjectList from "../../views/ProjectList";
import ProjectCreate from "../../views/ProjectCreate";
import {Overview, Files, Activities, Subscribers} from "../../views/ProjectDetails/components";
import axios from "../../utils/axios";
let project = null;
const fetchProject = () => {
    axios.get('/api/projects/1').then(response => {
        project = response.data.project;
    });
};
fetchProject();
storiesOf("Views/项目", module)
    .add("浏览", () =>
        <AuthLayout component={ProjectList} />
    );
storiesOf("Views/项目", module)
    .add("创建", () =>
        <AuthLayout component={ProjectCreate} />
    );
storiesOf("Views/项目", module)
    .add("查看", () =>
        <AuthLayout component={Overview} project={project} />
    );
storiesOf("Views/项目", module)
    .add("文件", () =>
        <AuthLayout component={Files} />
    );
storiesOf("Views/项目", module)
    .add("活动", () =>
        <AuthLayout component={Activities} activities={project.activities} />
    );
storiesOf("Views/项目", module)
    .add("订阅", () =>
        <AuthLayout component={Subscribers} subscribers={project.subscribers} />
    );



