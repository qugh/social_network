import s from '../Friends.module.scss'

export const Friend = (props) => (
    <div className={s.friend_item}>
      <div> <img src={`/img/avatars/${props.avatar}`} alt="friend_img" className={s.friend_image}/></div>
        <p className={s.friend_name}> {props.name}  </p>
    </div>
)