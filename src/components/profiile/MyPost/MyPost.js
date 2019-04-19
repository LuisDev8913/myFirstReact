import React from 'react';
import PostCSS from './Mypost.module.css';
import Post from './SinglePost/Post';
import {addPostActionCreator,updateNewPostActionCreator} from "../../../redux/state"



const MyPost =(props)=>{
    let NewPostElement = React.createRef();

    let onPostChange =()=>{
        let text = NewPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text)) ;
    };

    let OnePost = () =>{
        props.dispatch(addPostActionCreator());
    };

    let postSingle =
        props.PostArr.map(p => <Post post={p.post} id={p.id}/>);

return (
    <div>
        <h3>My Posts</h3>
        <div className={PostCSS.addpost}>
            <textarea onChange={onPostChange} ref={NewPostElement} value={props.newPostText}/>
            <button onClick={OnePost}>Add Post</button>
        </div>
    <div className={PostCSS.post}>
      <div className={PostCSS.post_img}>
      </div>
        <div>
            {postSingle}
        </div>
    </div>
    </div>
);
};

export default MyPost;
