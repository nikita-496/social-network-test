import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/WithAuthRedirect'
import { setCurrentPage, toggleFollowingProgress, followSuccess, unFollowSuccess, getUsers } from '../../redux/usersReducer'
import { getPageSize,getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, listUsers } from '../../redux/usersSelectors'
import UsersAPIComponent from './UsersAPIComponent'

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: listUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default (
        connect(mapStateToProps, 
            {
                followSuccess, unFollowSuccess, setCurrentPage, 
                toggleFollowingProgress,getUsers
            })
    )(UsersAPIComponent)
