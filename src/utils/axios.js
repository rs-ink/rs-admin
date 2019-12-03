import axios from 'axios';

const axiosConfig = {
    baseUrl: "http://s.zhilianqifu.cn",
    method: "POST",
    responseType: 'json',
    withCredentials: true,
    mode: 'cors',
    timeout: 3000,
    proxy: {
        host: '127.0.0.1', port: 8888
    },
};
const instance = axios.create(axiosConfig);

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
