import {
    GET_CATEGORYLIST_SUCCESS,
    GET_CATEGORYLIST_FAIL,


} from '../actions/types';

const initialState = {
    results: null,
    count: null,
    next: null,
    previous: null 


}

function Blog(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case GET_CATEGORYLIST_SUCCESS:
            return {
                ...state,
                results: payload.results,
                count: payload.count,
                next: payload.next,
                previous: payload.previous
            }
        case GET_CATEGORYLIST_FAIL:
            return {
                ...state,
                results: null,
                count: null,
                next: null,
                previous: null

            }
        default:
            return state
    }

}

export default Blog;