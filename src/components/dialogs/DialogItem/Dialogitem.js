import React from 'react';
import DialogCSS from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props)=>{
    return(
        <div className={DialogCSS.item}>
            <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    );
};


export default DialogItem;
