import axios from 'axios';
import {
    GET_CATEGORYLIST_SUCCESS,
    GET_CATEGORYLIST_FAIL,


} from './types';

//import.meta.env.VITE_BACKEND_URL

export const  get_categories = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/category-blog/`, config);

        if (response.status === 200){
            dispatch({
                type: GET_CATEGORYLIST_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: GET_CATEGORYLIST_FAIL
            });
        }
    } catch(err){
        dispatch({
            type: GET_CATEGORYLIST_FAIL
        });
    }
}