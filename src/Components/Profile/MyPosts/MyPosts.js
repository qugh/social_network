import p from './MyPosts.module.scss'
import Post from "./Posts/MyPost";
const MyPosts = (props) => {

    return (
        <>
            <div>
               <h3 className={p.p1}>My posts</h3>
               <div className={p.new_post}> <textarea></textarea>
                    <button>New post</button>

               </div>
            </div>
<div className={p.posts}>

    {props.items.map( (post,key)=> (<Post key={post.id} message={post.message} id={post.id} likesCount={post.likesCount}/>)) }

</div>
        </>

    );
}

export default MyPosts;