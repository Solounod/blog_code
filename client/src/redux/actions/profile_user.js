import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROFILE_USER_VIEW_SUCCESS,
    GET_PROFILE_USER_VIEW_FAIL,
    GET_PROFILE_USER_UPDATE_SUCCESS,
    GET_PROFILE_USER_UPDATE_FAIL,
} from './types';

export const profile_user_view = (username) => async dispach => {
    if(localStorage.getItem('access')){
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }

        try{
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/profile/${username}`,  config);

            if (response.status === 200){
                dispach({
                    type: GET_PROFILE_USER_VIEW_SUCCESS,
                    payload: response.data
                });
            }else{
                dispatchEvent({
                    type: GET_PROFILE_USER_VIEW_FAIL
                });
            }
        }catch(err){}

        
    }else{
        dispach({
            type: GET_PROFILE_USER_VIEW_FAIL
        })
    }
}

function getCsrfToken() {
    return document.cookie
        .split('; ')
        .find(row => row.startsWith('csrftoken='))
        ?.split('=')[1];
}

export const update_profile_user = (
    user,
    first_name,
    last_name,
    onSuccess
    
) => async dispatch => {
    if (localStorage.getItem('access')){
        const csrfToken = getCsrfToken(); 
        console.log("CSRF Token:", csrfToken);
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                //'X-CSRFToken': csrfToken 
                
            },
            withCredentials: true
        };

    
        const body = JSON.stringify({
            user: user.id,
            first_name,
            last_name,
           
        });

        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}api/profile/update/${user}/`, body, config);

            if (response.status === 200){
                dispatch({
                    type: GET_PROFILE_USER_UPDATE_SUCCESS,
                    payload: response.data
                })
                if (onSuccess){
                    onSuccess();
                }
                dispatch(setAlert('Su perfil a sido modificado','success'))
            }else {
                dispatch({
                    type: GET_PROFILE_USER_UPDATE_FAIL,
                    
                })
                dispatch(setAlert('Ha ocurrido un error o los datos no son correctos, intenta nuevamente', 'danger'));
            }
        }catch(err){
            dispatch({
                type: GET_PROFILE_USER_UPDATE_FAIL,
                
            })
            dispatch(setAlert('Ha ocurrido un error o los datos no son correctos, intenta nuevamente', 'danger'));
        }
    }else{
        dispatch({
            type: GET_PROFILE_USER_UPDATE_FAIL,
            
        })
    }
}