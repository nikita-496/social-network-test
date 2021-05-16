const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 2 
}
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
        return {...state, users: [...state.users, ...action.users]}
      }
    default: 
        return state
    }
}

export const followAC = (userId) => ( {type: FOLLOW, userId} ) //AC - ActionCretor
export const unFollowAC = (userId) => ( {type: UNFOLLOW, userId } )
export const setusersAC = (users) => ( {type: SET_USERS, users } )
export default usersReducer