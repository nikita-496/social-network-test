import React from 'react'
import { connect } from 'react-redux'
import { followAC, setusersAC, unFollowAC } from '../../redux/usersReducer'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (Users);