import React from 'react';
import s from './Dialogs.module.css';
import { sendMessageCreater, updateNewMessageBodyCreter } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../storeContext';

const DialogsContainer = () => {
        
    return <StoreContext.Consumer> 
        { 
        (store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
            store.dispatch(sendMessageCreater())
            }

            let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreter(body))
            }

           return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
        }
    }
       
    </StoreContext.Consumer>  

    
}

export default DialogsContainer;