import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import { Redirect, withRouter } from 'react-router';
import { getProfile } from '../../redux/profileReducer';


//Данная компонента осуществляет работу, связанную с отправкой запроса на сервер
class ProfileContainer extends React.Component{

    //все side-effects делаются в методе жизненного цикла ComponentDidMount()
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId=17158}
        
        this.props.getProfile(userId)
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
            
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ( {profile: state.profilePage.profile, isAuth: state.auth.isAuth} )

let withUrlDataContainerComponent = withRouter(ProfileContainer)

//Создание контейнерной компоненты поверх ProfileContainer. Данная СС делает работу, связанную с запросами к store и получае от него callbacks
export default connect (mapStateToProps, {getProfile}) (withUrlDataContainerComponent);


