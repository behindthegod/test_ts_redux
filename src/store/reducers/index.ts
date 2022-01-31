import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {photoReducer} from "./photoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    photo: photoReducer,
})

export type RootState = ReturnType<typeof rootReducer>