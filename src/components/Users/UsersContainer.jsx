import { connect } from 'react-redux'
import { followAC, setusersAC, unFollowAC, setCurrentPageAC, setTotalCountAC } from '../../redux/usersReducer'
import UsersAPIComponent from './UsersAPIComponent'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setusersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (UsersAPIComponent);