import { combineReducers } from "redux";
import Auth from "./auth";
import Blog from "./blog";
import ProfileUser from "./profile_user";
import ProfileUtilities from "./profileutilities";
import Alert from './alert';


const rootReducer = combineReducers({
    Auth,
    Alert,
    Blog,
    ProfileUser,
    ProfileUtilities
});

export default rootReducer
