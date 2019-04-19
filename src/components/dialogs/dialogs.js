import React from 'react';
import DialogCSS from './Dialogs.module.css';
import DialogItem from './../dialogs/DialogItem/Dialogitem';
import MessageItem from './../dialogs/Message/Message';
import MyMessageInput from './MySmstext/MyMessageInput';
import CreateMessagePerson from  './../dialogs/CreateMessagePerson/CreateMessagePerson'


const Dialogs =(props)=>{


    let NewArray = props.state.dialogsData.map(
        dialog => (<DialogItem name={dialog.name} id={dialog.id}/>)
    );

    let NewMessage = props.state.messageData.map(
        sms => (<MessageItem sms={sms.sms}/>)
    );


    return (
        <div className={DialogCSS.header}>
            <div className={DialogCSS.dialogs}>
                <div className={`${DialogCSS.messages} ${DialogCSS.clearfix}`}>
                    <div className={DialogCSS.left}><MyMessageInput/></div>
                    <div className={DialogCSS.right}>{NewMessage}</div>
                </div>
                <div className={DialogCSS.personname}>
                    {NewArray}
                </div>
            </div>
            <CreateMessagePerson/>
        </div>
    );
};

export default Dialogs;
