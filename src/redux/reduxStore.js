import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let  reducers = combineReducers({
   /* profileReducer, // profileReducer: profileReducer или profilePage: profileReducer - аналогично
    dialogsReducer,
    sidebarReducer*/
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
    

});

let store = createStore(reducers);

export default store