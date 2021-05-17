//Типы action
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOOGLE_IS_FETCING = 'TOOGLE_IS_FETCING'

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

//измененеи state (бизнес логики)
 const usersReducer = (state = initialState, action) => { //если state нет (action не пришел), в свлучае первого запуска приложения, то будешь имeть начальное сотяоние  
  
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state, 
        //users: [...state.users],
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
       }

    case UNFOLLOW: 
      return {
      ...state, 
      //users: [...state.users],
      users: state.users.map( user => {
        if (user.id === action.userId) {
          return {...user, followed: false}
        }
        return user
        })
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
    default: 
        return state
    }
}

export const follow = (userId) => ( {type: FOLLOW, userId} ) //AC - ActionCretor
export const unFollow = (userId) => ( {type: UNFOLLOW, userId } )
export const setUsers = (users) => ( {type: SET_USERS, users } )
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type:TOOGLE_IS_FETCING, isFetching })
export default usersReducer