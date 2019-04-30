import React from 'react';
import ProfileCSS from './profile.module.css';
import Person from './infoperson/person';
import MyPostContainer from './MyPost/MyPostContainer';


const Profile =(props)=>{

    return (
        <div className={ProfileCSS.profile}>
            <Person name="Marina" country="Ukraine"/>
            <MyPostContainer store={props.store}/>
        </div>
    );
}

export default Profile;
