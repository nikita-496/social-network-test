const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
  posts: [
      {id: 1, follwoed: false, fullName: 'Nikita', status: 'I\'m Front-end Developer', location: {sity: 'Magnitogorsk', country: 'Russia'} },
      {id: 2, follwoed: true, fullName: 'Darya', status: 'I\'m Back-end Developer', location: {sity: 'Moskow', country: 'Russia'} },
      {id: 3, follwoed: false, fullName: 'Dmitriy', status: 'I\'m DevOps', location: {sity: 'Kazan', country: 'Russia'} },
      {id: 4, follwoed: true, fullName: 'Sergey', status: 'I\'m Front-end Developer', location: {sity: 'Novosibirsk', country: 'Russia'} },
  ],
  newPostText: 'it-kamasutra.com'
}
 const usersReducer = (state = initialState, action) => { //если state нет (action не пришел), в свлучае первого запуска приложения, то будешь имeть начальное сотяоние  
  
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state, 
        //users: [...state.users],
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {...user, follwoed: true}
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
          return {...user, follwoed: false}
        }
        return user
        })
      }
    default: 
        return state
    }
}

export const followAC = (userId) => ( {type: FOLLOW, userId} ) //AC - ActionCretor
export const unFollowAC = (userId) => ( {type: UNFOLLOW, userId } )
export default usersReducer