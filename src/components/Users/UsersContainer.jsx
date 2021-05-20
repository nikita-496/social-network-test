import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { setCurrentPage, toggleFollowingProgress, getUsers, followSuccess, unFollowSuccess } from '../../redux/usersReducer'
import UsersAPIComponent from './UsersAPIComponent'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default (
        withAuthRedirect,
        connect(mapStateToProps, 
            {
                followSuccess, unFollowSuccess, setCurrentPage, 
                toggleFollowingProgress,getUsers
            })
    )(UsersAPIComponent)
