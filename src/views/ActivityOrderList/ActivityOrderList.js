import Page from "../../components/Page";
import {makeStyles} from "@material-ui/styles";
import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import axiosInstance from "../../utils/axios";
import OrderCard from "./component/OrderCard/OrderCard";
import Paper from "@material-ui/core/Paper";
import {GridList} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(3),
    },
    paginate: {
        marginTop: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center'
    }
}));

const ActivityOrderList = ({match}) => {
    const classes = useStyles();
    const {id} = match.params;
    const [orders, setOrders] = useState([]);

    function refresh() {
        axiosInstance.post("/rest/order/list", {actId: Number(id)}).then(res => {
            setOrders(res.data.data);
            console.log(res)
        })
    }

    useEffect(() => {
        console.log(id);
        refresh();
    }, []);

    return <Page
        className={classes.root}
        title="活动列表"
    >
        <Header id={id}/>
        <Paper className={classes.content} style={{display: "flex", justifyContent: "space-around"}}>
            <GridList>
                {
                    orders && orders.map((order, index) => <OrderCard key={index} {...order} delItem={(id) => {
                        axiosInstance.post("/rest/order/del", {id: String(id)}).then(res => {
                            console.log(res);
                            refresh();
                        })
                    }}/>)
                }
            </GridList>

        </Paper>
    </Page>
};

export default ActivityOrderList;
