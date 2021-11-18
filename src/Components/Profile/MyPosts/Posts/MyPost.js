import p from './MyPost.module.css'
import image from '../../../../img/avatar.jpg'
const Post = () => {
    return (
                <div className={p.item}>
                    <img src={image}/>
                    Post 1
                </div>
    );
}

export default Post;