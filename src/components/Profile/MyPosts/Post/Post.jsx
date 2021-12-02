import React from 'react';
import post from './Post.module.css';

const Post = (props) => {
   
    return <div>
        
        <div className={post.item}>
            <img src={props.image}/>
            {props.message}
            <div>
                <span>Like </span> <span>{props.like}</span>
                    </div>
        </div>
       
  </div>
}

export default Post;