import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './../Dialogs.module.css';



const Message = (props) => {

    let newMessage = React.createRef();
    
    return <div className='d.messageBlock'>
        
    <div className={d.message}>
        {props.message}
        </div>
        </div>
}



export default Message;