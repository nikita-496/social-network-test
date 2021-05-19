import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageCreater, updateNewMessageBodyCreter } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

//Функции, которыми настраивается connect
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreater())
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreter(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;