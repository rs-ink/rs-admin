import React from 'react';
import {storiesOf} from '@storybook/react';
import Alert from "../../../components/Alert";
import Label from "../../../components/Label";
import SearchBar from "../../../components/SearchBar";
import AddPost from "../../../components/AddPost";
import AuthGuard from "../../../components/AuthGuard";
import CodeBlock from "../../../components/CodeBlock";
import CookiesNotification from "../../../components/CookiesNotification";
import FilesDropzone from "../../../components/FilesDropzone";
import GenericMoreButton from "../../../components/GenericMoreButton";
import GoogleAnalytics from "../../../components/GoogleAnalytics";
import Markdown from "../../../components/Markdown";
import ProjectCard from "../../../components/ProjectCard";
import centered from '@storybook/addon-centered/react';
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import PricingModal from "../../../components/PricingModal";
import ReviewStars from "../../../components/ReviewStars";
import RichEditor from "../../../components/RichEditor";
import StackAvatars from "../../../components/StackAvatars";
import StatusBullet from "../../../components/StatusBullet";

const markDownText = "# This is markDown!\r\n# Hello";

storiesOf('Kit/index', module)
    .addDecorator(centered)
    .addDecorator(withKnobs)
    .add('Alert', () => <Alert message={"Alert Message"}/>)
    .add('SearchBar', () => <SearchBar/>)
    .add("AddPost", () => <AddPost/>)
    .add("AuthGuard", () => <AuthGuard/>)
    .add("CodeBlock", () => <CodeBlock language={"js"} source={"console.log('js');"}/>)
    .add("CookiesNotification", () => <CookiesNotification/>)
    .add("FilesDropzone", () => <FilesDropzone/>)
    .add("GenericMoreButton", () => <GenericMoreButton/>)
    .add("GoogleAnalytics", () => <GoogleAnalytics/>)
    .add("Label", () => <Label/>)
    .add("Markdown", () => <Markdown source={text("source", markDownText)}/>)
    .add("ProjectCard", () => <ProjectCard
        project={{"liked": true, "author": {"avatar": "/images/avatars/avatar_1.png", name: "苗大哥"}, tags: ["测试一下"]}}/>)
    .add("PricingModal", () => <PricingModal open={boolean("open", true)}/>)
    .add("ReviewStars", () => <ReviewStars/>)
    .add("RichEditor", () => <RichEditor/>)
    .add("StackAvatars", () => <StackAvatars avatars={["/images/avatars/avatar_1.png","/images/avatars/avatar_1.png","/images/avatars/avatar_1.png"]}/>)
    .add("StatusBullet", () => <StatusBullet color={"red"}/>)
;
