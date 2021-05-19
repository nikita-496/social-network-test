import { usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
  posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
      {id: 3, message: 'Blabla', likesCount: 11},
      {id: 4, message: 'Dada', likesCount: 11}
  ],
  newPostText: 'it-kamasutra.com',
  profile: null
}
 const profileReducer = (state = initialState, action) => { //если state нет (action не пришел), в свлучае первого запуска приложения, то будешь имeть начальное сотяоние  
  
  switch (action.type) {
    case ADD_POST : {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }   
    }
    case UPDATE_NEW_POST_TEXT : {
      return {
        ...state,
        newPostText: action.newText
      }
    }
      case SET_USER_PROFILE : {
        return {...state, profile: action.profile}
    }
    default: 
        return state
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export const getProfile = (userId) => {

  return (dispatch) => {

    usersAPI.getUserProfile(userId).then(response =>{
      dispatch(setUserProfile(response.data))
}); 
  }
}

export default profileReducer