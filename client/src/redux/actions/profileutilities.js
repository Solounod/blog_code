import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_PROFILE_UTILITIES_SAVEPOST_SUCCESS,
    GET_PROFILE_UTILITIES_SAVEPOST_FAIL,
    GET_PROFILE_UTILITIES_VIEWPOST_USER_SUCCESS,
    GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL,
    GET_PROFILE_UTILITIES_DELETEPOST_USER_SUCCESS,
    GET_PROFILE_UTILITIES_DELETEPOST_USER_FAIL

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
           
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/savepostuser/${username}/`,  config);
            

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
        }catch(err){
            dispatch({
                type: GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL
            });
        }
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
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/savepostuser/retrieveupdate/${id}/`,  config);

            if (response.status === 200){
                dispatch({
                    type: GET_PROFILE_UTILITIES_SAVEPOST_SUCCESS,
                    payload: response.data
                });
                dispatch(setAlert('Artículo guardado en su perfil','success'))
            }else{
                dispatch({
                    type: GET_PROFILE_UTILITIES_SAVEPOST_FAIL
                });
                dispatch(setAlert('Error al guardar artículo, puede que ya exista en su perfil.', 'danger'));
            }
        }catch(err){
            dispatch({
                type: GET_PROFILE_UTILITIES_SAVEPOST_FAIL
            });
            dispatch(setAlert('Error al guardar artículo, puede que ya exista en su perfil.', 'danger'));
        }
    }else{
        dispatch({
            type: GET_PROFILE_UTILITIES_SAVEPOST_FAIL
        })
    }

}

export const profiles_utilities_deletepost = (id) => async dispatch => {
    if (localStorage.getItem('access')){
        const config = {
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }

        try{
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/savepostuser/delete/${id}/`,  config);

            if (response.status === 200){
                dispatch({
                    type: GET_PROFILE_UTILITIES_DELETEPOST_USER_SUCCESS,
                    payload: {id}
                });
                dispatch(setAlert('Ha sido eliminado el artículo de tu perfil.','success'))
            }else{
                dispatch({
                    type: GET_PROFILE_UTILITIES_DELETEPOST_USER_FAIL
                });
                dispatch(setAlert('Error al eliminar artículo de tu perfil.', 'danger'));
            }
        }catch(err){
            dispatch({
                type: GET_PROFILE_UTILITIES_DELETEPOST_USER_FAIL
            });
            dispatch(setAlert('Error al eliminar artículo de tu perfil.', 'danger'));
        }
    }else{
        dispatch({
            type: GET_PROFILE_UTILITIES_DELETEPOST_USER_FAIL
        });
        
    }

}