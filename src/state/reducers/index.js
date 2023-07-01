import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import tooglePop  from "./tooglePop";
import postReducer from "./postReducer"
import boardIdReducer from "./boardIdReducer"
import postIdReducer from "./postIdReducer"

const reducers=combineReducers ({
    board:boardReducer,
    popState:tooglePop,
    post:postReducer,
    boardId:boardIdReducer,
    postId: postIdReducer,
})

export default reducers;