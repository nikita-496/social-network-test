//Типы action
const SET_USER_DATA = 'SET_USER_DATA' //установить пользовательские данные


let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: true
}

//измененеи state (бизнес логики)
 const authReducer = (state = initialState, action) => { //если state нет (action не пришел), в свлучае первого запуска приложения, то будешь имeть начальное сотяоние  
  
  switch (action.type) {
    case SET_USER_DATA: 
      return {
        ...state,
        ...action.data //деструктуризация объекта data
      }

    default: 
        return state
    }
}

export const setAuthUserData = (id,email, login) => ( {type: SET_USER_DATA, data: {id,email,login}} ) //AC - ActionCretor
export default authReducer