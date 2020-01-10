import axios from 'axios';
import PropTypes from "prop-types";
import config from 'config';

const axiosConfig = {
    baseURL: config.BaseUrl,
    responseType: 'json',
    withCredentials: true,
    mode: 'cors',
    timeout: 3000,
    // proxy: {
    //     host: '127.0.0.1', port: 8888
    // },
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.defaults.method = 'post';

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});
const uploadFile = ({uri,file, onUploadProgress}) => {
    let forms = new FormData();
    let configs = {
        responseType: 'json',
        withCredentials: true,
        mode: 'cors',
        headers: {'Content-Type': 'multipart/form-data'},
    };
    if (onUploadProgress && 'function' === typeof onUploadProgress) {
        configs = {...configs, onUploadProgress}
    }
    forms.append('file', file);
    return axiosInstance.post(uri, forms, configs)
};

uploadFile.propTypes = {
    file: PropTypes.object,
    onUploadProgress: PropTypes.func,
};
export default axiosInstance;
export {uploadFile, axiosConfig};
