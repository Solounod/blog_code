import { combineReducers } from "redux";
import Auth from "./auth";
import Blog from "./blog";
import ProfileUser from "./profile_user";
import ProfileUtilities from "./profileutilities";


const rootReducer = combineReducers({
    Auth,
    Blog,
    ProfileUser,
    ProfileUtilities
});

export default rootReducer
