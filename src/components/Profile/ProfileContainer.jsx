import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import {withRouter } from 'react-router';
import { getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer';
import { compose } from 'redux';


class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId=this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserProfile(userId)
    }

    render() {
        {/*console.log("Render Profile")*/}
        return (
                <Profile {...this.props} profile={this.props.profile} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}/>
            )
    }
}

let mapStateToProps = (state) => {
    //console.log("mapStateToProps Profile")
return ( {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
} )
}


export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
    //withAuthRedirect
)(ProfileContainer)




