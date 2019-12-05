import React from 'react';
import {makeStyles} from '@material-ui/styles';
import { Card, CardContent,  Typography} from '@material-ui/core';
import {Page} from 'components';
import AddSvg from "./components/Svg";


const EncodeLogin =()=> {
    const useStyles = makeStyles(theme => ({
        root: {
            width:'100%'
        },
        card: {
            background:'#ff8f5e',
            width:320,
            padding:(20,10),
            margin:('auto'),
            marginTop:56
        },
        title:{
            color:'#fff',
            textAlign:'center'
        },
        content: {
            width:300,
            height:400,
            background:'#eaeaea'
        },
    }));
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="登录"
        >
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

                    </CardContent>
                </Card>
        </Page>
    );
};

export default EncodeLogin;
