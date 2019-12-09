import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import SessionContainer from "../SessionContainer";
import {useContainer} from "unstated-next";

// Example of user roles: ['GUEST', 'USER', 'ADMIN'];


function AuthGuard(props) {
    const {children, history} = props;
    const {isLogin, session} = useContainer(SessionContainer);
    console.log("AuthGuard:::", props);
    console.log("AuthGuard:::", isLogin());
    console.log("AuthGuard:::", session);
    useEffect(() => {
        if (!isLogin()) {
            history.push('/auth/login');
            window.location.replace("/auth/login");
        }
        // if (!roles.includes(session.user.role)) {
        //     history.push('/errors/error-401');
        // }
        // eslint-disable-next-line
    }, []);
    return <Fragment>{children}</Fragment>;
};

AuthGuard.propTypes = {
    children: PropTypes.node,
    roles: PropTypes.array
};

export default AuthGuard;
