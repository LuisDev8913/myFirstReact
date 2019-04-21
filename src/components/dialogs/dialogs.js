import React from 'react';
import DialogCSS from './Dialogs.module.css';
import DialogItem from './../dialogs/DialogItem/Dialogitem';
import MessageItem from './../dialogs/Message/Message';
import MyMessageInput from './MySmstext/MyMessageInput';
import CreateMessagePerson from  './../dialogs/CreateMessagePerson/CreateMessagePerson'


const Dialogs =(props)=>{


    let NewArray = props.dialogspage.dialogsData.map(
        dialog => (<DialogItem name={dialog.name} id={dialog.id}/>)
    );

    let NewMessage = props.dialogspage.messageData.map(
        sms => (<MessageItem sms={sms.sms}/>)
    );

    let DialogSingle = props.dialogspage.DialogArr.map(t => <MyMessageInput post={t.dialogPost} id={t.id}/>);


    return (
        <div className={DialogCSS.header}>
            <div className={DialogCSS.dialogs}>
                <div className={`${DialogCSS.messages} ${DialogCSS.clearfix}`}>
                    <div className={DialogCSS.left}>{DialogSingle}</div>
                    <div className={DialogCSS.right}>{NewMessage}</div>
                </div>
                <div className={DialogCSS.personname}>
                    {NewArray}
                </div>
            </div>
            <CreateMessagePerson dialogspage={props.state}
                                 dispatch={props.dispatch}
                                 NewDialog={props.dialogspage.NewDialog}
            />
        </div>
    );
};

export default Dialogs;
