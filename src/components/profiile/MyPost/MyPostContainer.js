import React from 'react';
import {addPostActionCreator,updateNewPostActionCreator} from "../../../redux/profilepage-reducer"
import MyPost from "./MyPost";



const MyPostContainer =(props)=>{
    let state = props.store.getState();

    let onPostChange =(text)=>{
        props.store.dispatch(updateNewPostActionCreator(text)) ;
    };

    let OnePost = () =>{
        props.store.dispatch(addPostActionCreator());
    };


return (
    <div>
        <MyPost updateNewPostText ={onPostChange}
                OnePost={OnePost}
                PostArr={state.profilepage.PostArr}
                newPostText={state.profilepage.NewPostText}
        />
    </div>
);
};

export default MyPostContainer;
