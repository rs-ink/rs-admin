/* eslint-disable no-unused-vars */
import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Button, TextField} from '@material-ui/core';
import useRouter from 'utils/useRouter';
import {useSession} from "auth/SessionContainer";
import axiosInstance from "utils/axios";
import {useMessageHook} from "hooks/MessageHook";
import {useFormValidate} from "hooks/FormValidate";

const schema = {
    email: {
        presence: {allowEmpty: false, message: '邮箱不正确'},
        email: true
    },
    password: {
        presence: {allowEmpty: false, message: '不能为空'}
    }
};

const useStyles = makeStyles(theme => ({
    root: {},
    fields: {
        margin: theme.spacing(-1),
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            flexGrow: 1,
            margin: theme.spacing(1)
        }
    },
    submitButton: {
        marginTop: theme.spacing(2),
        width: '100%'
    }
}));

const LoginForm = props => {
    const {className, ...rest} = props;
    const {login} = useSession();
    const classes = useStyles();
    const {formState, handleChange, hasError, errorInfo, value} = useFormValidate({schema});

    const {history} = useRouter();
    const {warn} = useMessageHook();
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(formState.values);
        axiosInstance.post("/rest/auth/login", {...formState.values})
            .then(res => {
                if (res.data.code !== 0) {
                    warn(res.data.code + res.data.msg);
                } else {
                    login({user: res.data.data});
                    history.push("/");
                }
            })

        // router.history.push('/');
    };
    return (
        <form
            {...rest}
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
        >
            <div className={classes.fields}>
                <TextField
                    fullWidth
                    label="邮箱"
                    name="email"
                    value={value('email')}
                    error={hasError('email')}
                    helperText={errorInfo('email')}
                    variant="outlined"
                    onChange={handleChange}
                />
                <TextField
                    error={hasError('password')}
                    fullWidth
                    helperText={
                        errorInfo('password')
                    }
                    label="密码"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={value('password')}
                    variant="outlined"
                />
            </div>
            <Button
                className={classes.submitButton}
                color="secondary"
                disabled={!formState.isValid}
                size="large"
                type="submit"
                variant="contained"
            >
                Sign in
            </Button>
        </form>
    );
};

LoginForm.propTypes = {
    className: PropTypes.string
};

export default LoginForm;
