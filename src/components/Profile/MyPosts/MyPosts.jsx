import React from 'react';
import mp from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} like={p.like} image={p.image} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
        
       
    };

    let postChange = () => {
        let text = newPostElement.current.value;
        props.updatePost(text);
        /*let action = updatePostActionCreator(text);
        props.dispatch(action);*/
      
    }
    return <div className={mp.postsBlock }>
        <div>
           <h3> My posts</h3>
           
            </div>
        <div>
            <textarea ref={newPostElement} onChange={postChange} value={props.newPostText}/>
            </div>
        <div>
            <button onClick={onAddPost }>Add post</button>
        </div>
        <div className={mp.posts}>
            {postElements}

                    </div>
  </div>
}

export default MyPosts;