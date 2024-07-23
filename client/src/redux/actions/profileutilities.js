import axios from 'axios';
import {
    GET_PROFILE_UTILITIES_SAVEPOST_SUCCESS,
    GET_PROFILE_UTILITIES_SAVEPOST_FAIL,
    GET_PROFILE_UTILITIES_VIEWPOST_USER_SUCCESS,
    GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL,
} from './types';

export const profiles_utilities_view = (username) => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }
        

        try{
            console.log(`${import.meta.env.VITE_BACKEND_URL}api/savepostuser/${username}`);
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/savepostuser/${username}/`,  config);
            console.log("Respuesta del servidor:", response.data);

            if (response.status === 200){
                dispatch({
                    type: GET_PROFILE_UTILITIES_VIEWPOST_USER_SUCCESS,
                    payload: response.data
                });
            }else{
                dispatch({
                    type: GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL
                });
            }
        }catch(err){}
    }else{
        dispatch({
            type: GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL
        })
    }

}

export const profiles_utilities_savepost = (id) => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }

        try{
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/savepostuser/retrieveupdate/${id}`,  config);

            if (response.status === 200){
                dispatch({
                    type: GET_PROFILE_UTILITIES_SAVEPOST_SUCCESS,
                    payload: response.data
                });
            }else{
                dispatch({
                    type: GET_PROFILE_UTILITIES_SAVEPOST_FAIL
                });
            }
        }catch(err){}
    }else{
        dispatch({
            type: GET_PROFILE_UTILITIES_SAVEPOST_FAIL
        })
    }

}