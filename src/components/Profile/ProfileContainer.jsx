import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux'
import {withRouter } from 'react-router';
import { getProfile } from '../../redux/profileReducer';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';


//Данная компонента осуществляет работу, связанную с отправкой запроса на сервер
class ProfileContainer extends React.Component{

    //все side-effects делаются в методе жизненного цикла ComponentDidMount()
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {userId=17158}
        
        this.props.getProfile(userId)
    }
    render() {
        return (
            
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let AuthRedirectComonent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ( {profile: state.profilePage.profile} )

let withUrlDataContainerComponent = withRouter(AuthRedirectComonent)

//Создание контейнерной компоненты поверх ProfileContainer. Данная СС делает работу, связанную с запросами к store и получае от него callbacks
export default connect (mapStateToProps, {getProfile}) (withUrlDataContainerComponent);


