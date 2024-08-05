import {
    GET_PROFILE_UTILITIES_SAVEPOST_SUCCESS,
    GET_PROFILE_UTILITIES_SAVEPOST_FAIL,
    GET_PROFILE_UTILITIES_VIEWPOST_USER_SUCCESS,
    GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL,
    GET_PROFILE_UTILITIES_DELETEPOST_USER_SUCCESS,
    GET_PROFILE_UTILITIES_DELETEPOST_USER_FAIL
} from '../actions/types';


const initialState = {
    access: localStorage.getItem('access'),
    results: [],
    id: null,
    user: null,
    post: null,
    post_details: {
        title: null,
        slug: null
    }
};

function ProfileUtilities(state = initialState, action){
    const {type, payload} = action;

    switch(type) {
        case GET_PROFILE_UTILITIES_SAVEPOST_SUCCESS:
            return {
                ...state,
                access: localStorage.getItem('access'),
                results: payload,
                id: payload.id,
                user: payload.user,
                post: payload.post,
                post_details: {
                    title: payload.title,
                    slug: payload.slug
                }
            }
        case GET_PROFILE_UTILITIES_SAVEPOST_FAIL:
            return {
                ...state,
                results: payload,
                id: null,
                user: null,
                post: null,
                post_details: {
                    title: null,
                    slug: null
                }
            }
        case GET_PROFILE_UTILITIES_VIEWPOST_USER_SUCCESS:
            
            return {
                ...state,
                access: localStorage.getItem('access'),
                results: payload.results
            }
        case GET_PROFILE_UTILITIES_VIEWPOST_USER_FAIL:
            return {
                ...state,
                results: null
            }
        case GET_PROFILE_UTILITIES_DELETEPOST_USER_SUCCESS:
            return {
                ...state,
                id: payload.id,
                user: payload.user,
                post: payload.post
            }
        case GET_PROFILE_UTILITIES_DELETEPOST_USER_FAIL:
            return state

            default:
                return state;
    }
}

export default ProfileUtilities;