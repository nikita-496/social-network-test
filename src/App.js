import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/Login/Login"
import {initializeApp} from './redux/appReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {withRouter } from 'react-router';
import Preloader from './components/common/preloader';

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer />
                                }/>
                    
                    <Route path='/users' render={ () => <UsersContainer /> }/>
                    <Route path='/login' render={ () => <LoginPage /> }/>
                </div>
            </div>
        )
    }
   
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
//испраелние бага на стадии инициализации приложения
export default compose(
    withRouter,
    connect (mapStateToProps, {initializeApp})) (App);
    
    


