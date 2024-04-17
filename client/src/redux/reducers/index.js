import { combineReducers } from "redux";
import Auth from "./auth";
import Blog from "./blog";
import ProfileUser from "./profile_user";


const rootReducer = combineReducers({
    Auth,
    Blog,
    ProfileUser
});

export default rootReducer
