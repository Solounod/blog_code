import axios from 'axios';
import {
    GET_CATEGORYLIST_SUCCESS,
    GET_CATEGORYLIST_FAIL,
    GET_BLOGLIST_OF_CATEGORY_SUCCESS,
    GET_BLOGLIST_OF_CATEGORY_FAIL,
    GET_BLOGLIST_POST_SUCCESS,
    GET_BLOGLIST_POST_FAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAIL,


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

export const get_bloglistOfCategory = (slug_category) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/category-blog/${slug_category}/`, config);
        if (response.status === 200){
            dispatch({
                type: GET_BLOGLIST_OF_CATEGORY_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: GET_BLOGLIST_OF_CATEGORY_FAIL
            });
        }
    }
    catch(err){
        dispatch({
            type: GET_BLOGLIST_OF_CATEGORY_FAIL
        });
    }

}

export const get_bloglistpost = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/blog-post/`, config);
        if (response.status === 200){
            dispatch({
                type: GET_BLOGLIST_POST_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: GET_BLOGLIST_POST_FAIL
            });
        }
    }
    catch(err){
        dispatch({
            type: GET_BLOGLIST_POST_FAIL
        });
    }
}

export const get_postblogdetail = (slug) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}api/blog-post/${slug}/`, config);
        if (response.status === 200){
            dispatch({
                type: GET_POST_DETAIL_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: GET_POST_DETAIL_FAIL
            });
        }
    }
    catch(err){
        dispatch({
            type: GET_POST_DETAIL_FAIL
        });
    }

}