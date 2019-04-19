import React from 'react';
import DialogCSS from './../Dialogs.module.css';


const CreateMessagePerson = (props)=>{

    /*let onDialogChange =(e)=>{
        let dialog = e.target.value;
        props.store.dispatch(UpdateDialogText(dialog)) ;
    };
    let OneDialog = () =>{
        props.store.dispatch(AddDialog());
    };*/
    return(
        <div className={DialogCSS.containertext}>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button >Add a message</button>
                </div>
            </div>
        </div>
    );
};


export default CreateMessagePerson;
