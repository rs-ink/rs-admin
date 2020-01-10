import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import config from 'config';
import moment from 'moment';
import {makeStyles} from '@material-ui/styles';
import {Avatar, Button, Card, CardContent, CardHeader, colors, Link, Typography} from '@material-ui/core';
import useRouter from "utils/useRouter";
import axiosInstance from "../../../../utils/axios";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: theme.spacing(2)
    },
    content: {
        padding: theme.spacing(2),
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexWrap: 'wrap'
        },
        '&:last-child': {
            paddingBottom: theme.spacing(2)
        }
    },
    header: {
        maxWidth: '100%',
        width: 240,
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(2),
            flexBasis: '100%'
        }
    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    stats: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            flexBasis: '50%'
        }
    },
    actions: {
        padding: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            flexBasis: '50%'
        }
    }
}));

const ActCard = props => {
    const {act, className,reload, ...rest} = props;

    const classes = useStyles();
    const {history} = useRouter();
    const statusColors = {
        'In progress': colors.orange[600],
        Canceled: colors.grey[600],
        Completed: colors.green[600]
    };

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent className={classes.content}>
                <div className={classes.header}>
                    <Avatar
                        alt="Author"
                        className={classes.avatar}
                        src={act.headerUrl}
                    >
                    </Avatar>
                    <div>
                        <Link
                            color="textPrimary"
                            component={RouterLink}
                            noWrap
                            onClick={()=>{
                                window.open(config.H5Url+"/"+act.id)
                            }}
                            variant="h5"
                        >
                            {act.actName}
                        </Link>
                        <CardHeader title={"id:"+act.id}/>
                    </div>
                </div>


                <div className={classes.stats}>
                    <Typography variant="h6">
                        {moment(act.startDate).format('DD MMMM YYYY')}
                    </Typography>
                    <Typography variant="body2">Project started</Typography>
                </div>
                <div className={classes.stats}>
                    <Typography variant="h6">
                        {moment(act.endDate).format('DD MMMM YYYY')}
                    </Typography>
                    <Typography variant="body2">Project deadline</Typography>
                </div>
                <div className={classes.stats}>
                    <Typography
                        style={{color: statusColors[act.state]}}
                        variant="h6"
                    >
                        {act.state}
                    </Typography>
                    <Typography variant="body2">Project status</Typography>
                </div>
                <div className={classes.actions}>
                    <Button
                        color="primary"
                        size="small"
                        variant="outlined"
                        onClick={() => {
                            history.push("/management/orders/" + act.id)
                        }}
                    >
                        订单
                    </Button>
                    <Button
                        color="primary"
                        size="small"
                        variant="outlined"
                        onClick={() => {
                            history.push("/management/act/detail?id=" + act.id)
                        }}
                    >
                        查看
                    </Button>
                    <Button
                        color="primary"
                        size="small"
                        variant="outlined"
                        onClick={() => {
                           axiosInstance.post("/rest/act/del",{id:act.id}).then(res=>{
                               reload();
                           })
                        }}
                    >
                        删除
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

ActCard.propTypes = {
    className: PropTypes.string,
    act: PropTypes.object.isRequired,
    reload:PropTypes.func.isRequired,
};

export default ActCard;
