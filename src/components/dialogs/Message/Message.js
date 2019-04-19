import React from 'react';
import DialogCSS from './../Dialogs.module.css';

const MessageItem= (props)=>{
    return(
        <div className={DialogCSS.message}>
            {props.sms}
        </div>
    );
};

export default MessageItem;
