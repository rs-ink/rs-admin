import {storiesOf} from "@storybook/react";
import React, {Fragment, Suspense} from "react";
import {TopBar} from "../../layouts/Dashboard/components";
import {LinearProgress} from "@material-ui/core";
import Login from "../../views/Login";
import {makeStyles} from "@material-ui/styles";
import Register from "../../views/Register";
import {Route} from "react-router";

function AuthLayout(props) {
    const useStyles = makeStyles(theme => ({
        content: {
            height: '100%',
            paddingTop: 56,
            [theme.breakpoints.up('sm')]: {
                paddingTop: 64
            }
        }
    }));
    const {component, ...res} = props;
    const classes = useStyles();
    return (<Fragment>
                <TopBar/>
                <main className={classes.content}>
                    <Suspense fallback={<LinearProgress/>}>
                        <Route path='*' component={component}/>
                    </Suspense>
                </main>
            </Fragment>)
}

storiesOf("Views/Auth2", module)
    .add("登录页", () => <AuthLayout component={Login} selfRedirect={true}/>);



