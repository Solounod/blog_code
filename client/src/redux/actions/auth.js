import axios  from  'axios';
import { 
    SIGNUP_SUCCES,
    SIGNUP_FAIL,
    SET_AUTH_LOADING,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL
     } from './types';


//import.meta.env.VITE_BACKEND_URL
export const signup = (username, email, password, re_password) => async dispatch => {
    dispatch({
        type: SET_AUTH_LOADING
    });

    const config = {
        headers: {
            'Content-Type': 'application/json' 
        }
    };

    const body = JSON.stringify({
        username,
        email,
        password,
        re_password
    })

    try{
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/users/`, body, config)
        if (response.status === 201) {
            dispatch({
                type: SIGNUP_SUCCES,
                payload: response.data
            });
        } else {
            dispatch({
                type: SIGNUP_FAIL
            })
        }
    } catch (err){
        dispatch({
            type: SIGNUP_FAIL
        })
    }
}

export const activate = (uid, token) => async dispatch => {
    const config = {
        headers : {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        uid,
        token
    });

    try {

            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/users/activation/`, body, config);

            if (response.status === 204) {
                dispatch({
                    type: ACTIVATION_SUCCESS
                });
            } else {
                dispatch({
                    type: ACTIVATION_FAIL
                });
            }
        }
        catch(err) {
            dispatch({
                type: ACTIVATION_FAIL
            });
        };
}

export const login = (username, password) => async dispatch => {

    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({
        username,
        password
    });

    try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}auth/jwt/create/`, body, config);

        if (response.status === 200){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
        } else {
            dispatch({
                type: LOGIN_FAIL
            })
        }

    }catch(err){
        dispatch({
            type: LOGIN_FAIL
        })

    }
}
