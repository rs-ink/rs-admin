import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/styles';
import {Typography} from '@material-ui/core';

import axiosInstance from 'utils/axios';
import {Page, Paginate} from 'components';
import {Header} from './components';
import ActCard from "./components/ActCard";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    results: {
        marginTop: theme.spacing(3)
    },
    paginate: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ActivityList = () => {
    const classes = useStyles();
    const [rowsPerPage] = useState(10);
    const [page] = useState(0);
    const [acts, setActs] = useState([]);
    useEffect(() => {
        let mounted = true;
        const fetchProjects = () => {
            axiosInstance.post('/rest/act/list', {
                start: acts.length, limit: 10,
            }).then(res => {
                if (mounted) {
                    setActs(res.data.data);
                }
            });
        };
        fetchProjects();
        return () => {
            mounted = false;
        };
    }, []);

    const handleFilter = () => {
    };
    const handleSearch = () => {
    };

    return (
        <Page
            className={classes.root}
            title="活动列表"
        >
            <Header/>
            {/*<SearchBar*/}
            {/*  onFilter={handleFilter}*/}
            {/*  onSearch={handleSearch}*/}
            {/*/>*/}
            <div className={classes.results}>
                <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                >
                    {acts.length} Records found. Page {page + 1} of{' '}
                    {Math.ceil(acts.length / rowsPerPage)}
                </Typography>
                {acts.map(act => (
                    <ActCard
                        reload={() => {
                            axiosInstance.post('/rest/act/list', {
                                start: 0, limit: 10,
                            }).then(res => {
                                setActs(res.data.data);
                            });
                        }}
                        key={act.id}
                        act={act}
                    />
                ))}
            </div>
            <div className={classes.paginate}>
                <Paginate pageCount={3}/>
            </div>
        </Page>
    );
};

export default ActivityList;
