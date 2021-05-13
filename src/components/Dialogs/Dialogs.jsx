

import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreater, updateNewMessageBodyCreter } from '../../redux/dialogsReducer';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody; 

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater())
    }

    let onNewMessageChange = (e) => {
       let body =  e.target.value;
       props.store.dispatch(updateNewMessageBodyCreter(body))
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               <div>  { messagesElements } </div>
               <div>
                    <div> 
                        <textarea 
                        value={newMessageBody} 
                        placeholder="Введите сообщение ..."
                        onChange={onNewMessageChange}> 
                        </textarea>
                    </div>
                    <div> 
                        <button onClick={onSendMessageClick}> Отправить </button>
                    </div>
               </div>
              
            </div>
        </div>
    )
}

export default Dialogs;