import React from 'react';
import d from './../Dialogs/Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)

    let messageElements = state.messagesData.map(ms => <Message message={ms.message} key={ms.id} />)
    let newMessageBody = state.newMessageBody;

    let onsendMessageClcik = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        
    }

    return <div className={d.dialogs}>
        <div className={d.dialogsItems}>
            {dialogsElements}
                </div>
        <div className={d.messages}>

            <div>{messageElements}</div>
            <div>   
                <div>
                    <textarea placeholder='Enter your message' value={newMessageBody} onChange={onNewMessageChange }></textarea>
                </div>
                <div>
                    <button onClick={onsendMessageClcik}>Send</button>
                                    
                </div>
            </div>
           
        </div>
        </div>
       
}

export default Dialogs;