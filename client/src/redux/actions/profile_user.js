import axios from 'axios';
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

        //const body = JSON.stringify({
        //    username
//
        //});

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

export const update_profile_user = (
    user,
    first_name,
    last_name,
    
) => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };

        /*const username = JSON.stringify({
            username
        });*/

        const body = JSON.stringify({
            user,
            first_name,
            last_name,
           
        });

        try {
            const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}api/profile/update/${user}`, body, config);

            if (response.status === 200){
                dispatch({
                    type: GET_PROFILE_USER_UPDATE_SUCCESS,
                    payload: response.data
                })
            }else {
                dispatch({
                    type: GET_PROFILE_USER_UPDATE_FAIL,
                    
                })
            }
        }catch(err){
            dispatch({
                type: GET_PROFILE_USER_UPDATE_FAIL,
                
            })
        }
    }else{
        dispatch({
            type: GET_PROFILE_USER_UPDATE_FAIL,
            
        })
    }
}