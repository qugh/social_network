import s from "./Message.module.scss";

const Message = (props) => {
    return (
        <div className={s.message}>

            <div className={`${s.message_container} ${props.type=='self'?s.self_message:s.message_from}`}>
                <img className={s.message_avatar} src={`/img/avatars/${props.avatar}`}/>
                {props.username}
            </div>
            <div className={`${s.user_last_message} ${props.type=='self'?s.user_last_self_message:s.user_last_message_from}`}>
                {props.message}
            </div>
        </div>
    );
}

export default Message;