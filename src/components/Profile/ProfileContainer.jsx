import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import {withRouter } from 'react-router';
import { getProfile, getStatus, updataStatus } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';


//Данная компонента осуществляет работу, связанную с отправкой запроса на сервер
class ProfileContainer extends React.Component{

    //все side-effects делаются в методе жизненного цикла ComponentDidMount()
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId=17158}
        
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return (
            
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} upDataStatus={this.props.updataStatus}/>
        )
    }
}

let mapStateToProps = (state) => ( {
    profile: state.profilePage.profile,
    status: state.profilePage.status
} )

export default compose (
    connect (mapStateToProps, {getProfile, getStatus, updataStatus}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)







