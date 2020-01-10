import Card from "@material-ui/core/Card";
import React from "react";
import {CardContent, makeStyles, TextField} from "@material-ui/core";
import moment from "moment";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";


const useStyles = makeStyles(() => ({
    root: {width: 200}

}));

const OrderCard = ({customerPhone, customerName, createTime, id, index, delItem}) => {
    const classes = useStyles();
    return <Card className={classes.root} style={{border: "black solid 1px", width: 300}}>
        <CardHeader title={"序号:" + index}/>
        <CardContent style={{height: 300, display: "flex", justifyContent: "space-evenly", flexDirection: "column"}}>
            <TextField label={"手机号："} value={customerPhone} variant="outlined" InputProps={{readOnly: true,}}/>
            <TextField label={"姓名："} value={customerName} variant="outlined" InputProps={{readOnly: true,}}/>
            <TextField label={"创建时间："} value={moment(createTime).format('MM-DD, HH:mm:ss')} variant="outlined"
                       InputProps={{readOnly: true,}}/>
        </CardContent>
        <CardActions>
            <Button size="small" onClick={() => {
                delItem(id);
            }}>删除</Button>
        </CardActions>
    </Card>
};
OrderCard.propTypes = {
    delItem: PropTypes.func.isRequired
};
export default OrderCard;
