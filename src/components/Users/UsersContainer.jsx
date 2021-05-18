import { connect } from 'react-redux'
import { follow, setUsers, unFollow, setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingProgress } from '../../redux/usersReducer'
import UsersAPIComponent from './UsersAPIComponent'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        toggleFollowingProgress: state.usersPage.toggleFollowingProgress
    }
}


export default  connect(mapStateToProps, 
    {
        follow, unFollow, setUsers, 
        setCurrentPage, setTotalCount, toggleIsFetching, toggleFollowingProgress
    }) (UsersAPIComponent);