import p from './MyPost.module.scss'
import image from '../../../../img/avatar.jpg'
const Post = (props) => {
    return (
                <div className={p.item}>
                    <img src={image} alt='avatar'/>
                    <div className={p.message_block}>
                   <div className={p.message}>{props.message}</div>
                    <div className={p.likesCount}>Likes: {props.likesCount}</div>
                    </div>
                </div>

    )
}

export default Post;