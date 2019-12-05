import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Card, CardContent, Typography} from '@material-ui/core';
import {Page} from 'components';
import AddSvg from "./components/Svg";
import LoginCode from "../Login/components/LoginCode";
import MuiCardContent from "../../theme/overrides/MuiCardContent";
import overrides from "../../theme/overrides";


const EncodeLogin = ({selfRedirect = false}) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height:'100%',
            overflow:'hidden'
        },
        card: {
            background: '#ff8f5e',
            width: 320,
            padding: (20, 10),
            margin: ('auto'),
            position:'relative',
            top:112
        },
        title: {
            color: '#fff',
            textAlign: 'center'
        },
        allCon:{
            width:'100%',
            backgroundSize:'cover',
            height:'100%',
            backgroundImage:'url(/images/background/bac.jpg)',
            backgroundPosition:'center',
            position:'relative'
        },
        content: {
            width: 300,
            height: 400,
            background: '#eaeaea',
            padding:0
        },
        animateImg:{
            position: 'absolute',
            zIndex: 1,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            animation: 'cloudLoop 8s linear infinite',
            webkitAnimation:'cloudLoop 8s linear infinite'
        }
    }));
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="登录"
        >
            <div className={classes.allCon}>
                <div className={classes.animateImg} style={{backgroundImage:'url(/images/background/clouds.png)'}}>

                </div>
                <Card className={classes.card}>
                    <Typography
                        gutterBottom
                        variant="h4"
                        className={classes.title}
                    >
                        Welcome
                    </Typography>
                    <AddSvg/>
                    <CardContent className={classes.content}>
                        <LoginCode />
                    </CardContent>
                </Card>
            </div>
        </Page>
    );
};

export default EncodeLogin;
