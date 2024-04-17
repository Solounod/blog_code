import {
    GET_PROFILE_USER_VIEW_SUCCESS,
    GET_PROFILE_USER_VIEW_FAIL,
    GET_PROFILE_USER_UPDATE_SUCCESS,
    GET_PROFILE_USER_UPDATE_FAIL,
} from '../actions/types';

const initialState = {
    results: null
};

function ProfileUser(state = initialState, action){
    const {type, payload} = action;

    switch(type) {
        case GET_PROFILE_USER_VIEW_SUCCESS:            
        case GET_PROFILE_USER_UPDATE_SUCCESS:
            return {
                ...state,
                results: payload.results
            }
        case GET_PROFILE_USER_VIEW_FAIL:
        case GET_PROFILE_USER_UPDATE_FAIL:    
            return {
                ...state,
                results: null
            }

        default:
            return state;
    }
} 

export default ProfileUser;