import { usersAPI } from "../api/api"
import { updateObjectInArray } from "../utilits/objectsHelpers"

//Типы action
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCING = 'TOOGLE_IS_FETCING'
const TOOGLE_IS_FOLOWWING_PROGRESS = 'TOOGLE_IS_FOLOWWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] 
}

//измененеи state (бизнес логики)
 const usersReducer = (state = initialState, action) => { //если state нет (action не пришел), в свлучае первого запуска приложения, то будешь имeть начальное сотяоние  
  
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state, 
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
       }

    case UNFOLLOW: 
      return {
      ...state, 
      users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
      
      }
      

      case SET_USERS: {
        return {...state, users:action.users}
      }

      case SET_CURRENT_PAGE: {
        return {...state, currentPage: action.currentPage}
      }
      case SET_TOTAL_USERS_COUNT: {
        return {...state, totalUsersCount: action.count}
      }
      case TOOGLE_IS_FETCING: {
        return {...state, isFetching: action.isFetching}
      }
      case TOOGLE_IS_FOLOWWING_PROGRESS: {
        return {
          ...state, 
          followingInProgress: action.isFetching 
            ? [...state.followingInProgress, action.userId]
            : [...state.followingInProgress.filter(id => id != action.userId)]
        }
      }
    default: 
        return state
    }
}

//Аctions Creator
export const followSuccess = (userId) => ( {type: FOLLOW, userId} ) //AC - ActionCreator
export const unFollowSuccess = (userId) => ( {type: UNFOLLOW, userId } )
export const setUsers = (users) => ( {type: SET_USERS, users } )
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type:TOOGLE_IS_FETCING, isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({type:TOOGLE_IS_FOLOWWING_PROGRESS, isFetching, userId })

//Thunk - Санки
//Логика отображения пользователей соц.сети
export const getUsers = (page ,pageSize) => {
    return async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalCount(data.totalCount))
    })
  }
}

// --- Общая логика для санки follow/unfollow---
const followUnfollowFlow = async (dispatch, userId,apiMethod, actionCreator) => {
  dispatch.toggleFollowingProgress(true, userId);
  let response = await apiMethod(userId)
      
          if (response.data.resultCode === 0) {
            dispatch.actionCreator(userId)
          }
          dispatch.toggleFollowingProgress(false, userId)
}
// --- Общая логика ---

//Логика процесса действия подписки на пользователя 
export const follow = (userId) => {
  return async (dispatch) => {
    
    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)

  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
 
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess)
    
  }
}

export default usersReducer