import {makeStyles} from "@material-ui/styles";
import React, {Fragment, Suspense, useEffect} from "react";
import {TopBar} from "../../layouts/Dashboard/components";
import {LinearProgress} from "@material-ui/core";
import {Route} from "react-router";
import useRouter from "../../utils/useRouter";
import {useURLSearchParams} from "../../hooks/URLSearchParams";

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
    const classes = useStyles();
    const {location,history} = useRouter();
    console.log("location::",location);
    console.log("history::",history);
    console.log("res::",res);
    const {addParams,...rest} = useURLSearchParams();
    useEffect(()=>{
        console.log("res::",res.length);
        if (res){
            let redirect = false;
            for(let p in res){
                if (!rest[p]){
                    redirect=true;
                }
            }
            if(redirect){
                addParams(res);
            }
        }
    },[]);

    return (<Fragment>
        <TopBar/>
        <main className={classes.content}>
            <Suspense fallback={<LinearProgress/>}>
                <Route  component={component}  />
            </Suspense>
        </main>
    </Fragment>)
}
