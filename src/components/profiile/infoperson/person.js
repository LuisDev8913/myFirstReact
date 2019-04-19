import React from 'react';
import PersonCSS from './person.module.css';

const Person =(props)=>{
    return (
        <div className={PersonCSS.person}>
            <div className={PersonCSS.im_person}>
                Image person
            </div>
            <div className={PersonCSS.person_info}>
                <p>Name: {props.name}</p>
                <p>Country: {props.country}</p>
            </div>
        </div>
    );
}

export default Person;
