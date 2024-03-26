import {
    GET_CATEGORYLIST_SUCCESS,
    GET_CATEGORYLIST_FAIL,
    GET_BLOGLIST_OF_CATEGORY_SUCCESS,
    GET_BLOGLIST_OF_CATEGORY_FAIL,
    GET_BLOGLIST_POST_SUCCESS,
    GET_BLOGLIST_POST_FAIL,
    GET_POST_DETAIL_SUCCESS,
    GET_POST_DETAIL_FAIL,


} from '../actions/types';

const initialState = {
    results: [],
    count: null,
    next: null,
    previous: null,
    result: null
    


}

function Blog(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_CATEGORYLIST_SUCCESS:
        case GET_BLOGLIST_OF_CATEGORY_SUCCESS:
        case GET_BLOGLIST_POST_SUCCESS:
        
            return {
                ...state,
                results: payload.results,
                count: payload.count,
                next: payload.next,
                previous: payload.previous,
                
            }
        case GET_POST_DETAIL_SUCCESS:
            return{
                ...state,
                result: payload,
            }
        case GET_CATEGORYLIST_FAIL:
        case GET_BLOGLIST_OF_CATEGORY_FAIL:
        case GET_BLOGLIST_POST_FAIL:
        
            return {
                ...state,
                results: null,
                count: null,
                next: null,
                previous: null,
                

            }
        case GET_POST_DETAIL_FAIL:
            return{
                ...state,
                result: null

            }
        default:
            return state
    }

}

export default Blog;