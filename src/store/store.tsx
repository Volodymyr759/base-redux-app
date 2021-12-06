import { combineReducers } from "redux";
import { postsReducer } from "./posts/postsReducer";
import { appReducer } from "./app/appReducer";

export const store = combineReducers({
    app: appReducer,
    posts: postsReducer,
})