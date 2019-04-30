import {combineReducers, createStore,} from "redux";
import profileReducer from "./profilepage-reducer";
import dialogsReducer from "./dialogspage-reducer";

let reducers = combineReducers({
    profilepage: profileReducer,
    dialogspage: dialogsReducer
});
let store = createStore(reducers);

export default store;