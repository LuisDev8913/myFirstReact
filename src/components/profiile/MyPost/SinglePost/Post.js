import React from 'react';
import PostCSS from './post.module.css';


const Post =(props)=>{

return (
    <div className={PostCSS.post}>
      <div className={PostCSS.post_img}>
      </div>
        <div>
            {props.post}
        </div>
    </div>
);
}

export default Post;
