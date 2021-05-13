import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageCreater, updateNewMessageBodyCreter } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater())
    }

    let onNewMessageChange = (body) => {
       props.store.dispatch(updateNewMessageBodyCreter(body))
    }
    
    return  <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
}

export default DialogsContainer;