import { combineReducers } from "redux";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    postsData:postReducer,
})

export default rootReducer