import React from 'react';
import PostCSS from './Mypost.module.css';
import Post from './SinglePost/Post';




const MyPost =(props)=>{
    let NewPostElement = React.createRef();

    let onPostChange =()=>{
        let text = NewPostElement.current.value;
        props.updateNewPostText(text);
    };

    let OnePost = () =>{
        props.OnePost();
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
