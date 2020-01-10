import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Button, Grid, Typography} from '@material-ui/core';
import axiosInstance, {axiosConfig} from "../../../../utils/axios";

const useStyles = makeStyles(() => ({
    root: {}
}));

const Header = props => {
    const {className, history, id, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                alignItems="flex-end"
                container
                justify="space-between"
                spacing={3}
            >
                <Grid item>
                    <Typography
                        component="h2"
                        gutterBottom
                        variant="overline"
                    >
                        ActivityOrderList
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                    >
                        订单列表
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        component={RouterLink}
                        variant="contained"
                        onClick={() => {
                         axiosInstance.post("/rest/order/download/"+id,{}).then(res=>{
                           if (res.data.code === 0 ){
                             window.open(axiosConfig.baseURL+res.data.data);
                           }
                         })
                        }}
                    >
                        下载报表
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

Header.propTypes = {
    className: PropTypes.string
};

export default Header;
