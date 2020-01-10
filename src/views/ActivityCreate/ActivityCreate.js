import React from 'react';
import {makeStyles} from '@material-ui/styles';

import {Page} from 'components';
import {Header} from './components';
import ActivityDetail from "./components/ActivityDetail/ActivityDetail";
import {useURLSearchParams} from "../../hooks/URLSearchParams";

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3, 3, 6, 3)
    },
    actions: {
        marginTop: theme.spacing(3)
    }
}));

const ActivityCreate = () => {
    const classes = useStyles();
    const {id} = useURLSearchParams();
    return (
        <Page
            className={classes.root}
            title="Project Create"
        >
            <Header/>
            <ActivityDetail id={id}/>
        </Page>
    );
};

export default ActivityCreate;
