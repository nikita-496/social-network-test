import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let  reducers = combineReducers({
   /* profileReducer, // profileReducer: profileReducer или profilePage: profileReducer - аналогично
    dialogsReducer,
    sidebarReducer*/
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store