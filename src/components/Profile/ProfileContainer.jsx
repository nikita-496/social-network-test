import React from 'react';
import Profile from './Profile';
import axios from 'axios'
import {connect} from 'react-redux'
import { setUserProfile } from '../../redux/profileReducer';


//Данная компонента осуществляет работу, связанную с отправкой запроса на сервер
class ProfileContainer extends React.Component{

    //все side-effects делаются в методе жизненного цикла ComponentDidMount()
    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            //ответ с сервера 
            .then(response =>{
                this.props.setUserProfile(response.data)
        }); 
    }
    render() {
        return (
            
                <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ( {profile: state.profilePage.profile} )

//Создание контейнерной компоненты поверх ProfileContainer. Данная СС делает работу, связанную с запросами к store и получае от него callbacks
export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer);
