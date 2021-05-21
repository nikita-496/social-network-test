import React from 'react';
import Header from './Header';
import  { authorizeThunkCreator, logout }  from '../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authorizeThunkCreator()
       /* usersAPI.authorize().then(response =>{
                //0 - залогинены
               if (response.data.resultCode === 0) {
                   let  {id,email, login} = response.data.data
                   this.props.setAuthUserData(id,email, login)
               }
        }); */
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ( 
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    } 
    ) 

export default connect (mapStateToProps, {authorizeThunkCreator, logout}) (HeaderContainer);


