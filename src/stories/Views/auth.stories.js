import {storiesOf} from "@storybook/react";
import React, {Fragment, Suspense} from "react";
import {TopBar} from "../../layouts/Dashboard/components";
import {LinearProgress} from "@material-ui/core";
import Login from "../../views/Login";
import EncodeLogin from "../../views/EncodeLogin";
import {makeStyles} from "@material-ui/styles";
import Register from "../../views/Register";


function AuthLayOut({children}) {
    const useStyles = makeStyles(theme => ({

        content: {
            height: '100vh',
            width:'100vw',
        },
    }));
    const classes = useStyles();
    return (<Fragment>
        <TopBar/>
        <main className={classes.content}>
            <Suspense fallback={<LinearProgress/>}>
                {children}
            </Suspense>
        </main>
    </Fragment>)
}
storiesOf("Views/Auth", module)
    .add("登录页", () =>
        <AuthLayOut>
            <Login/>
        </AuthLayOut>
    )
    .add("扫码登录", () =>
        <AuthLayOut>
            <EncodeLogin/>
        </AuthLayOut>
    )
    .add("注册页面", () =>
        <AuthLayOut>
            <Register/>
        </AuthLayOut>);

