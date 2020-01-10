import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import config from 'config';

function LoginCode({width = '300px', height = '400px', state = new Date().getTime(), redirectUrl, selfRedirect = false}) {
    const [src, setSrc] = useState();
    useEffect(() => {
        let uri = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + config.AppId +
            '&scope=snsapi_login' +
            '&state=' + state +
            '&login_type=jssdk' +
            '&self_redirect=' + selfRedirect.toString() +
            '&redirect_uri=' + window.encodeURIComponent(redirectUrl || window.location.href.split("?")[0])
        ;
        setSrc(uri);
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line
    return (<iframe src={src} width={width} height={height} frameBorder={0} scrolling={"no"}/>)
}

LoginCode.propTypes = {
    redirectUrl: PropTypes.string,
    selfRedirect: PropTypes.string,
};

export default LoginCode
