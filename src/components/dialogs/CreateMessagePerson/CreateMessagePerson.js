import React from 'react';
import DialogCSS from './../Dialogs.module.css';
import {UpdateDialogText,AddDialog} from "../../../redux/state"

const CreateMessagePerson = (props)=>{

    let NewDialogElement = React.createRef();

    let onDialogChange =()=>{
        let dialog = NewDialogElement.current.value;
        props.dispatch(UpdateDialogText(dialog)) ;
    };
    let OneDialog = () =>{
        props.dispatch(AddDialog());
    };
    return(
        <div className={DialogCSS.containertext}>
            <div>
                <div>
                    <textarea onChange={onDialogChange} ref={NewDialogElement} value={props.NewDialog}/>
                </div>
                <div>
                    <button onClick={OneDialog}>Add a message</button>
                </div>
            </div>
        </div>
    );
};


export default CreateMessagePerson;
