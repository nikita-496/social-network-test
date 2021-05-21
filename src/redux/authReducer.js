import { stopSubmit } from "redux-form"
import { authAPI, usersAPI } from "../api/api"

//Типы action
const SET_USER_DATA = 'SET_USER_DATA' //установить пользовательские данные


let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: true,
  isAuth: false
}

//измененеи state (бизнес логики)
 const authReducer = (state = initialState, action) => { //если state нет (action не пришел), в свлучае первого запуска приложения, то будешь имeть начальное сотяоние  
  
  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.payload, //деструктуризация объекта data,
        isAuth: true
      }

    default: 
        return state
    }
}

  export const setAuthUserData = (id,email, login, isAuth) => ( {type: SET_USER_DATA, payload: {id,email,login, isAuth}} ) //AC - ActionCretor

//Логика авторизации пользователя
  export const authorizeThunkCreator = () => {
    return (dispatch) => {
      authAPI.authorize().then(response =>{
        //0 - залогинены
      if (response.data.resultCode === 0) {
          let  {id,email, login} = response.data.data
          dispatch(setAuthUserData(id,email, login, true))
      }
    }); 

    }
}

export const login = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe).then(response =>{
      //0 - залогинены
    if (response.data.resultCode === 0) {
        dispatch(authorizeThunkCreator())
    } else {
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
      dispatch(stopSubmit("login", {_error: message}))
    }
  }); 
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(response =>{
      //0 - залогинены
    if (response.data.resultCode === 0) {
        dispatch(authorizeThunkCreator(null, null, null, false))
    }
  }); 

  }
}

export default authReducer







/*export const authorize = () => {
  return (dispatch) => {

    dispatch(setAuthUserData)

    usersAPI.authorize(id, email, login).then(response => {

      })

    
  }
}*/
/*export  authReducer = () => {
  return (dispatch) => {
    usersAPI.authorize(id, email, login)
            .then(response =>{
               if (response.data.resultCode === 0) {
                   let  {id,email, login} = response.data.data
                   dispatch(setAuthUserData(id,email, login))
               }
        }); 
  }
  
}*/
