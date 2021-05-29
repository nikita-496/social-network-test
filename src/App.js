
import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {Route} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from "./components/Login/Login"

import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import {withRouter } from 'react-router';
import Preloader from './components/common/preloader';
import { BrowserRouter } from 'react-router-dom'
import store from './redux/reduxStore'
import { initializeApp } from './redux/appReducer';


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

let AppContainer = compose(
    withRouter,
    connect (mapStateToProps, {initializeApp})) (App);

const MainApp = () => {
    return <BrowserRouter>
            <Provider store={store}>
              <AppContainer />
            </Provider>
        </BrowserRouter>
} 
export default MainApp
    
    



import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Инициализация</h1>
    </div>
  );
}

export default App;

