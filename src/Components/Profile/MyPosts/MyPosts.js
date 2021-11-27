import p from './MyPosts.module.scss'
import Post from "./Posts/MyPost";
import React from "react";

const MyPosts = (props) => {
    let newPostElement = React.createRef();
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({
            type:'UPDATE-NEW-POST-TEXT',
            newText: text
        });
    }
    console.log(props);
    let addPost = () => {
        props.dispatch({
            type: 'ADD-POST'
        });
    }
    return (
        <>
            <div>
                <h3 className={p.p1}>My posts</h3>
                <div className={p.new_post}>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.items.newPostText}/>


                    <button onClick={addPost}>New post</button>

                </div>
            </div>
            <div className={p.posts}>

                {props.items.posts.map((post, key) => (
                    <Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>))}

            </div>
        </>

    );
}

export default MyPosts;