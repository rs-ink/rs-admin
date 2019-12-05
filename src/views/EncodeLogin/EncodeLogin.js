import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Card, CardContent, Typography} from '@material-ui/core';
import {Page} from 'components';
import AddSvg from "./components/Svg";
import LoginCode from "../Login/components/LoginCode";
import PropTypes from 'prop-types';
import {useContainer} from "unstated-next";
import SessionContainer from "../../auth/SessionContainer";
import axios from "../../utils/axios";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";

const EncodeLogin = ({match,location}) => {
    const useStyles = makeStyles(theme => ({
        root: {
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        },
        card: {
            background: '#ff8f5e',
            width: 320,
            padding: (20, 10),
            margin: ('auto'),
            position: 'relative',
            top: 112
        },
        title: {
            color: '#fff',
            textAlign: 'center'
        },
        allCon: {
            width: '100%',
            backgroundSize: 'cover',
            height: '100%',
            backgroundImage: 'url(/images/background/bac.jpg)',
            backgroundPosition: 'center',
            position: 'relative'
        },
        content: {
            width: 300,
            height: 400,
            background: '#eaeaea',
            padding: 0
        },
        animateImg: {
            position: 'absolute',
            zIndex: 1,
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            animation: 'cloudLoop 8s linear infinite',
            webkitAnimation: 'cloudLoop 8s linear infinite'
        }
    }));
    const classes = useStyles();

    const {redirectUrl,selfRedirect} = match.path;

    const {login} = useContainer(SessionContainer);

    const searchParams = new URLSearchParams(location.search);

    const [open, setOpen] = useState(false);
    console.log(searchParams);
    console.log(searchParams.get("code"));

    const code = searchParams.get("code");
    const state = searchParams.get("state");

    useEffect(() => {
        if (code && state) {
            axios.post("/rest/wx/admin", {code, state}).then(res => {
                console.log(res.data);
                if (res.data.code === -1) {
                    console.log(window.location.href.split("?")[0]);
                    window.location.replace(window.location.href.split("?")[0]);
                } else if (res.data.code === 5002) {
                    //TODO 显示小程序二维码
                    setOpen(true);
                } else if (res.data.data.id > 0) {
                    login({loggedIn: true, user: res.data.data});
                    window.location.replace("/");
                    // history.replace("/");
                    // window.location.href = "/"
                }
            });
        }
        // eslint-disable-next-line
    }, []);

    function handleClose() {
        setOpen(false);
    }
    return (
        <Page
            className={classes.root}
            title="登录"
        >
            <div className={classes.allCon}>
                <div className={classes.animateImg} style={{backgroundImage: 'url(/images/background/clouds.png)'}}>
                </div>

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        请通过小程序授权头像与昵称
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <img src={"/images/wxm_code.jpg"} width={258} height={258} alt={"wxm-code"}/>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
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
                        <LoginCode redirectUrl={redirectUrl} selfRedirect={selfRedirect}/>
                    </CardContent>
                </Card>
            </div>
        </Page>
    );
};
EncodeLogin.propTypes = {
    selfRedirect: PropTypes.bool,
    redirectUrl: PropTypes.string
};
export default EncodeLogin;
