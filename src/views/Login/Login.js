import React, {useEffect, useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Card, CardContent, CardMedia, Divider, Link, Typography} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import {Page} from 'components';
import gradients from 'utils/gradients';
import LoginForm from "./components/LoginForm";

import axios from 'utils/axios';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import {useContainer} from "unstated-next";
import SessionContainer from "../../auth/SessionContainer";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(6, 2)
    },
    card: {
        width: theme.breakpoints.values.md,
        maxWidth: '100%',
        overflow: 'unset',
        display: 'flex',
        position: 'relative',
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%',
            width: '50%'
        }
    },
    content: {
        padding: theme.spacing(8, 4, 3, 4)
    },
    media: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        padding: theme.spacing(3),
        color: theme.palette.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    icon: {
        backgroundImage: gradients.green,
        color: theme.palette.white,
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1),
        position: 'absolute',
        top: -32,
        left: theme.spacing(3),
        height: 64,
        width: 64,
        fontSize: 32
    },
    loginForm: {
        marginTop: theme.spacing(3)
    },
    divider: {
        margin: theme.spacing(2, 0)
    },
    person: {
        marginTop: theme.spacing(2),
        display: 'flex'
    },
    avatar: {
        marginRight: theme.spacing(2)
    }
}));

const Login = ({history, location}) => {
    const classes = useStyles();
    return (
        <Page
            className={classes.root}
            title="登录"
        >
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <LockIcon className={classes.icon}/>
                    <Typography
                        gutterBottom
                        variant="h3"
                    >
                        登 录
                    </Typography>
                    <Typography variant="subtitle2">
                        Sign in on the internal platform
                    </Typography>
                    <LoginForm className={classes.loginForm} />
                    <Divider className={classes.divider}/>
                    <Link
                        align="center"
                        color="secondary"
                        component={RouterLink}
                        to="/auth/register"
                        underline="always"
                        variant="subtitle2"
                    >
                        Don't have an account?
                    </Link>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image="/images/auth.png"
                    title="Cover"
                >
                    <Typography
                        color="inherit"
                        variant="subtitle1"
                    >
                        Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they
                        sold out High Life.
                    </Typography>
                    <div className={classes.person}>
                        <Avatar
                            alt="Person"
                            className={classes.avatar}
                            src="/images/avatars/avatar_2.png"
                        />
                        <div>
                            <Typography
                                color="inherit"
                                variant="body1"
                            >
                                Ekaterina Tankova
                            </Typography>
                            <Typography
                                color="inherit"
                                variant="body2"
                            >
                                Manager at inVision
                            </Typography>
                        </div>
                    </div>
                </CardMedia>
            </Card>
        </Page>
    );
};

export default Login;
