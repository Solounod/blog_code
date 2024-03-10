import { combineReducers } from "redux";
import Auth from "./auth";
import Blog from "./blog";


const rootReducer = combineReducers({
    Auth,
    Blog
   
});

export default rootReducer
