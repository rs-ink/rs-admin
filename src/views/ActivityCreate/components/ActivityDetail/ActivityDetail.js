import React, {useEffect, useState} from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/styles";
import {useFormValidate} from "hooks/FormValidate";
import moment from "moment";
import {DateTimePicker} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import {useList} from "react-use";
import FileUpload from "components/FileUpload/FileUpload";
import {Button, LinearProgress} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import GridList from "@material-ui/core/GridList";
import axiosInstance from "../../../../utils/axios";
import useRouter from "../../../../utils/useRouter";

const schema = {
    actName: {
        presence: {allowEmpty: false, message: '必填项'},
        length: {
            maximum: 64
        }
    },
    headerUrl: {presence: {allowEmpty: false, message: "主图"}}

};
const useStyle = makeStyles(theme => ({
    root: {},
    desc: {
        width: '100%',
    },
    dateField: {
        '& + &': {
            marginLeft: theme.spacing(2)
        }
    }

}));

const ActivityDetail = ({id}) => {
    const classes = useStyle();

    const [wait, setWait] = useState(false);
    const {formState, handleChange, hasError, errorInfo, value, setValues} = useFormValidate({schema});
    useEffect(() => {
        if (id) {
            setWait(true);
            axiosInstance.post("/rest/act/detail", {id: Number(id)}).then(res => {
                console.log(res);
                setValues(res.data.data);
                set(res.data.data.images || []);

                setWait(false);
            })
        }
    }, []);
    const [calendarTrigger, setCalendarTrigger] = useState(null);
    const handleCalendarOpen = trigger => {
        setCalendarTrigger(trigger);
    };

    const handleCalendarAccept = date => {
        console.log(date);
        setValues({[calendarTrigger]: moment(date).toDate().getTime()})
    };

    const handleCalendarClose = () => {
        setCalendarTrigger(false);
    };

    const calendarOpen = Boolean(calendarTrigger);

    const calendarMinDate = calendarTrigger === 'startTime' ? moment() : moment(formState.values.startTime).add(1, 'day');

    // const [files,setFiles]=useState([]);
    const [files, {set, push, removeAt}] = useList(formState.values.images || []);

    useEffect(() => {
        setValues({images: files})
    }, [files]);
    const {history} = useRouter();
    const submit = () => {
        console.log(formState.values);
        let param = formState.values;
        axiosInstance.post("/rest/act/update", param).then(res => {
            console.log(res);
            history.push("/management/acts")
        });
    };
    return <Paper>
        {wait && <LinearProgress/>}
        <Card>
            <CardHeader title={"楼盘详情"}/>
            <CardActions>
                <Button color="primary" variant="contained" onClick={submit} disabled={!formState.isValid}>提交</Button>
            </CardActions>

            <CardContent>
                <TextField fullWidth label="*楼盘名称"
                           name="actName"
                           onChange={handleChange}
                           defaultValue={value('actName')}
                           value={value('actName')}
                           error={hasError('actName')}
                           helperText={errorInfo('actName')}
                           variant="outlined"/>
            </CardContent>
            <CardContent>
                <TextField
                    id="outlined-multiline-flexible"
                    fullWidth
                    label="楼盘描述"
                    name={'actDesc'}
                    defaultValue={value('actDesc')}
                    value={value('actDesc')}
                    helperText={errorInfo('actDesc')}
                    error={hasError('actDesc')}
                    multiline
                    rows={4}
                    rowsMax={10}
                    onChange={handleChange}
                    variant="outlined"
                />
            </CardContent>
            <Divider/>
            <CardContent>
                <Grid container={true} justify={"space-around"}>
                    <TextField
                        className={classes.dateField}
                        label="*手机号"
                        name="phone"
                        type={'tel'}
                        defaultValue={value('phone')}
                        value={value('phone')}
                        helperText={errorInfo('phone')}
                        error={hasError('phone')}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.dateField}
                        label="*优惠总量"
                        name="actAmount"
                        type={'number'}
                        defaultValue={value('actAmount')}
                        helperText={errorInfo('actAmount')}
                        error={hasError('actAmount')}
                        onChange={handleChange}
                        value={value('actAmount')}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.dateField}
                        label="开始时间"
                        name="startTime"
                        onClick={() => handleCalendarOpen('startTime')}
                        value={moment(formState.values.startTime).format('YYYY-MM-DD hh:mm:ss')}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.dateField}
                        label="*结束时间"
                        name="endTime"
                        onClick={() => handleCalendarOpen('endTime')}
                        value={moment(formState.values.endTime).format('YYYY-MM-DD hh:mm:ss')}
                        variant="outlined"
                    />
                </Grid>
            </CardContent>
            <CardContent>
                <Grid container={true} justify={"space-around"}>
                    <TextField
                        className={classes.dateField}
                        label="*邀请函描述1 看房时间"
                        name="kanFangDateStr"
                        type={'string'}
                        defaultValue={value('kanFangDateStr')}
                        value={value('kanFangDateStr')}
                        helperText={errorInfo('kanFangDateStr')}
                        error={hasError('kanFangDateStr')}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.dateField}
                        label="*邀请函描述2 看房地点"
                        name="kanFangDiDian"
                        type={'string'}
                        defaultValue={value('kanFangDiDian')}
                        value={value('kanFangDiDian')}
                        helperText={errorInfo('kanFangDiDian')}
                        error={hasError('kanFangDiDian')}
                        onChange={handleChange}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.dateField}
                        label="*邀请函描述3 开放商"
                        name="inviteInfosaaaa"
                        type={'string'}
                        value={value('inviteInfos') ? value('inviteInfos')[0] : ""}
                        helperText={errorInfo('inviteInfos')}
                        error={hasError('inviteInfos')}
                        onChange={(e) => {
                            if (e.target.value !== "") {
                                e.persist();
                                let inviteInfos = value('inviteInfos') || [""];
                                console.log(inviteInfos);
                                inviteInfos[0] =  String(e.target.value);
                                setValues({inviteInfos})
                            }
                        }}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.dateField}
                        label="*邀请函描述3 技术支持"
                        name="inviteInfosbbb"
                        type={'string'}
                        value={value('inviteInfos') ? value('inviteInfos')[1]:""}
                        helperText={errorInfo('inviteInfos')}
                        error={hasError('inviteInfos')}
                        onChange={(e) => {
                            if (e.target.value !== "") {
                                e.persist();
                                let inviteInfos = value('inviteInfos') || ["", ""];
                                inviteInfos[1] = e.target.value;
                                setValues({inviteInfos})
                            }
                        }}
                        variant="outlined"
                    />
                </Grid>
            </CardContent>
            <Divider/>
            <CardContent label={"主图"} variant={'outlined'}>
                *主图
                <GridList>
                    <FileUpload success={(res) => {
                        let data = res.data.data;
                        let src = data.host + data.filePath;
                        setValues({headerUrl: src})
                    }}/>
                    {
                        formState.values.headerUrl && <img src={formState.values.headerUrl} alt={'主图'}/>
                    }
                </GridList>
            </CardContent>
            <Divider/>
            <CardContent label={"卖点"} variant={'outlined'}>
                卖点
                <GridList>
                    <FileUpload success={(res) => {
                        let data = res.data.data;
                        let src = data.host + data.filePath;
                        setValues({secondUrl: src})
                    }}/>
                    {
                        formState.values.secondUrl && <img src={formState.values.secondUrl} alt={'卖点'}/>
                    }
                </GridList>
            </CardContent>
            <CardContent label={"主图"} variant={'outlined'}>
                底部图片
                <GridList>
                    <FileUpload success={(res) => {
                        let data = res.data.data;
                        let src = data.host + data.filePath;
                        setValues({endUrl: src})
                    }}/>
                    {
                        formState.values.endUrl && <img src={formState.values.endUrl} alt={'底部图片'}/>
                    }
                </GridList>
            </CardContent>
            <Divider/>
            <Divider/>
            <CardContent name={'images'} label={"图片"} title={"图片"} disabled={false} variant={'outlined'}>
                详情图片：点击选择或拖拽图片上传
                <FileUpload success={(res) => {
                    let data = res.data.data;
                    let src = data.host + data.filePath;
                    // setFiles(files => ([...files].concat(src)));
                    push(src);
                }}/>
                <Grid>
                    {
                        files.map((f, index) => (
                            <Grid item={true} key={f} onDoubleClick={() => {
                                removeAt(index)
                            }}>
                                <img src={f} alt={index}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </CardContent>
        </Card>
        <DateTimePicker
            minDate={calendarMinDate}
            onChange={handleCalendarAccept}
            onClose={handleCalendarClose}
            open={calendarOpen}
            style={{display: 'none'}} // Temporal fix to hide the input element
            value={moment(formState.values[calendarTrigger])}
            okLabel={'确定'}
            cancelLabel={'取消'}
            variant="dialog"
        />

    </Paper>
};
export default ActivityDetail;
