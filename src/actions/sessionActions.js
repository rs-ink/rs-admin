export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

export const login = (params) => dispatch =>{
    console.log(params);
    dispatch({
        type: SESSION_LOGIN,params
    });
};


export const logout = () => dispatch => {
    // history.push('/auth/login');
    dispatch({
        type: SESSION_LOGOUT
    });
};


