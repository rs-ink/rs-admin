import React, { Fragment, Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';

import {TopBar} from "../Dashboard/components";
import {useURLSearchParams} from "../../hooks/URLSearchParams";

const useStyles = makeStyles(theme => ({
    content: {
        height: '100%',
        paddingTop: 56,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 64
        }
    }
}));

const Auth = props => {
    const { route } = props;

    const classes = useStyles();
    return (
        <Fragment>
            <TopBar />
            <main className={classes.content}>
                <Suspense fallback={<LinearProgress />}>
                    {route && renderRoutes(route.routes)}
                </Suspense>
            </main>
        </Fragment>
    );
};

Auth.propTypes = {
    route: PropTypes.object
};

export default Auth;
