import React from 'react';
import DialogCSS from './../Dialogs.module.css';

const MyMessageInput= (props)=>{
    return(
        <div>
            <div className={DialogCSS.MyMessageInput}>
                {props.dialogPost}
            </div>
        </div>
    );
};

export default MyMessageInput;
