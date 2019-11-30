import * as actionTypes from 'actions';

// noinspection SpellCheckingInspection
const initialState = {
    loggedIn: true,
    user: {
        first_name: 'Shen',
        last_name: 'Zhi',
        email: 'demo@devias.io',
        avatar: '/images/avatars/avatar_11.png',
        bio: 'Brain Director',
        role: 'ADMIN' // ['GUEST', 'USER', 'ADMIN']
    }
};

const sessionReducer = (state = initialState, action) => {
    console.log(action, state);
    switch (action.type) {
        case actionTypes.SESSION_LOGIN: {
            return {
                ...initialState
            };
        }
        case actionTypes.SESSION_LOGOUT: {
            return {
                ...state,
                loggedIn: false,
                user: {
                    role: 'GUEST'
                }
            };
        }
        default: {
            return state;
        }
    }
};

export default sessionReducer;