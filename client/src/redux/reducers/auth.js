import {
    SIGNUP_FAIL,
    SIGNUP_SUCCES,
    SET_AUTH_LOADING
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null,
    
}

function Auth(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SET_AUTH_LOADING:
            return {
                ...state,
                //loading: true
            }
        case SIGNUP_SUCCES:
        case SIGNUP_FAIL:
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,  
            };
        default:
        return state;

    }
}

export default Auth