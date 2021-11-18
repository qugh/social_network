import p from './MyPosts.module.css'
import Post from "./Posts/MyPost";
const MyPosts = () => {
    return (
<div>
            <div className="">
                My posts
                <div className="">New post</div>
            </div>
<div className={p.posts}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
</div>

</div>
    );
}

export default MyPosts;