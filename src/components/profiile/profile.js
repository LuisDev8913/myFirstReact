import React from 'react';
import ProfileCSS from './profile.module.css';
import Person from './infoperson/person';
import MyPost from './MyPost/MyPost';


const Profile =(props)=>{

    return (
        <div className={ProfileCSS.profile}>
            <Person name="Marina" country="Ukraine"/>
            <MyPost PostArr={props.profilepage.PostArr}
                    newPostText={props.profilepage.NewPostText}
                    dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
