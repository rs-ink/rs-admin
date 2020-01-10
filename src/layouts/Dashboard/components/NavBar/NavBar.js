import React, {Fragment, useEffect} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Divider, Drawer, Hidden, Paper, Typography} from '@material-ui/core';

import useRouter from 'utils/useRouter';
import {Navigation} from 'components';
import navigationConfig from '../../../navigationConfig';
import {useIntl} from "react-intl";
import {useSession} from "auth";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        overflowY: 'auto'
    },
    content: {
        padding: theme.spacing(2)
    },
    profile: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    },
    divider: {
        marginTop: theme.spacing(2)
    },
    navigation: {
        marginTop: theme.spacing(2)
    }
}));

const NavBar = props => {
    const {openMobile, onMobileClose, className, ...rest} = props;
    const {formatMessage: f} = useIntl();
    const classes = useStyles();
    const router = useRouter();
    const {session} = useSession();

    useEffect(() => {
        if (openMobile) {
            onMobileClose && onMobileClose();
        }
        // eslint-disable-next-line
    }, [router.location.pathname]);

    const navbarContent = (
        <div className={classes.content}>
            <div className={classes.profile}>
                <Avatar
                    alt="Person"
                    className={classes.avatar}
                    component={RouterLink}
                    src={session.user.avatar}
                />
                <Typography
                    className={classes.name}
                    variant="h4"
                >
                    {session.user.nickName}
                </Typography>
                <Typography variant="body2">{session.user.nickName}</Typography>
            </div>
            <Divider className={classes.divider}/>
            <nav className={classes.navigation}>
                {navigationConfig.map(list => {
                    return (
                        <Navigation
                            component="div"
                            key={list.title}
                            pages={list.pages}
                            title={list.id ? f({id: list.id}) : list.title}
                        />
                    )
                })}
            </nav>
        </div>
    );

    return (
        <Fragment>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                >
                    <div
                        {...rest}
                        className={clsx(classes.root, className)}
                    >
                        {navbarContent}
                    </div>
                </Drawer>
            </Hidden>
            <Hidden mdDown>
                <Paper
                    {...rest}
                    className={clsx(classes.root, className)}
                    elevation={1}
                    square
                >
                    {navbarContent}
                </Paper>
            </Hidden>
        </Fragment>
    );
};

NavBar.propTypes = {
    className: PropTypes.string,
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

export default NavBar;
