import { usersAPI } from "../api/api"

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
        ...action.data, //деструктуризация объекта data,
        isAuth: true
      }

    default: 
        return state
    }
}

  export const setAuthUserData = (id,email, login) => ( {type: SET_USER_DATA, data: {id,email,login}} ) //AC - ActionCretor

//Логика авторизации пользователя
  export const authorizeThunkCreator = (id,email, login) => {

    return (dispatch) => {
      usersAPI.authorize(id,email, login).then(response =>{
        //0 - залогинены
      if (response.data.resultCode === 0) {
          let  {id,email, login} = response.data.data
          dispatch(setAuthUserData(id,email, login))
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
