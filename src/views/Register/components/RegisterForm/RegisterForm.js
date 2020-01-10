import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/styles';
import {Button, Checkbox, FormHelperText, Link, TextField, Typography} from '@material-ui/core';

import useRouter from 'utils/useRouter';
import axios from "utils/axios";
import {useFormValidate, useMessageHook} from "hooks";
import {useSession} from "auth";

const schema = {
    email: {
        presence: {allowEmpty: false, message: 'is required'},
        email: true,
        length: {
            maximum: 64
        }
    },
    password: {
        presence: {allowEmpty: false, message: 'is required'},
        length: {
            maximum: 128
        }
    },
    policy: {
        presence: {allowEmpty: false, message: 'is required'},
        checked: true
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
    policy: {
        display: 'flex',
        alignItems: 'center'
    },
    policyCheckbox: {
        marginLeft: '-14px'
    },
    submitButton: {
        marginTop: theme.spacing(2),
        width: '100%'
    }
}));

const RegisterForm = props => {
    const {className, ...rest} = props;
    const classes = useStyles();
    const {history} = useRouter();

    const {warn, success} = useMessageHook();
    const {login} = useSession();

    const {formState, handleChange, hasError} = useFormValidate({schema});

    const handleSubmit = async event => {
        event.preventDefault();
        axios.post("/rest/auth/register", {
            ...formState.values,
        }).then(res => {
            console.log(res);
            if (res.data.code !== 0) {
                warn(res.data.msg);
            } else {
                success('注册成功');
                login({user: res.data.data});
                history.push("/")
            }
        });

    };


    return (
        <form
            {...rest}
            className={clsx(classes.root, className)}
            onSubmit={handleSubmit}
        >
            <div className={classes.fields}>
                <TextField
                    error={hasError('email')}
                    helperText={hasError('email') ? formState.errors.email[0] : null}
                    fullWidth
                    label="Email address"
                    name="email"
                    onChange={handleChange}
                    value={formState.values.email || ''}
                    variant="outlined"
                />
                <TextField
                    error={hasError('password')}
                    fullWidth
                    helperText={
                        hasError('password') ? formState.errors.password[0] : null
                    }
                    label="Password"
                    name="password"
                    onChange={handleChange}
                    type="password"
                    value={formState.values.password || ''}
                    variant="outlined"
                />
                <div>
                    <div className={classes.policy}>
                        <Checkbox
                            checked={formState.values.policy || false}
                            className={classes.policyCheckbox}
                            color="primary"
                            name="policy"
                            onChange={handleChange}
                        />
                        <Typography
                            color="textSecondary"
                            variant="body1"
                        >
                            同意{' '}
                            <Link
                                color="secondary"
                                component={RouterLink}
                                to="#"
                                underline="always"
                                variant="h6"
                            >
                                用户协议
                            </Link>
                        </Typography>
                    </div>
                    {hasError('policy') && (
                        <FormHelperText error>{formState.errors.policy[0]}</FormHelperText>
                    )}
                </div>
            </div>
            <Button
                className={classes.submitButton}
                color="secondary"
                disabled={!formState.isValid}
                size="large"
                type="submit"
                variant="contained"
            >
                注册
            </Button>
        </form>
    );
};

RegisterForm.propTypes = {
    className: PropTypes.string
};

export default RegisterForm;
