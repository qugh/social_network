import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import avatar from '../../../img/avatar.jpg'
const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    let name = props.name;
    return (
        <div className={s.username_left}>
            <img className={s.avatar_image} src={`/img/avatars/${props.avatarUrl}`}/>
            <NavLink
                className={(Dialog) => Dialog.isActive ? s.active : null}
                to={path}>{name}</NavLink>
        </div>
    );
}

export default DialogItem

