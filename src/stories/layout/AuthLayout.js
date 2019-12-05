import {makeStyles} from "@material-ui/styles";
import React, {Fragment, Suspense} from "react";
import {TopBar} from "../../layouts/Dashboard/components";
import {LinearProgress} from "@material-ui/core";
import {Route} from "react-router";
import {renderRoutes} from "react-router-config";

export default function AuthLayout(props) {
    const useStyles = makeStyles(theme => ({
        content: {
            width: '100vw',
            height: '100vh',
            paddingTop: 56,
            [theme.breakpoints.up('sm')]: {
                paddingTop: 64
            }
        }
    }));
    const {component, ...res} = props;
    console.log(res);
    const classes = useStyles();
    return (<Fragment>
        <TopBar/>
        <main className={classes.content}>
            <Suspense fallback={<LinearProgress/>}>
                <Route path={res} component={component}  />
            </Suspense>
        </main>
    </Fragment>)
}
