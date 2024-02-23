import axios  from  'axios';
import { 
    SIGNUP_SUCCES,
    SIGNUP_FAIL,
    SET_AUTH_LOADING
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

