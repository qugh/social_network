import s from './Messages.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




export const Messages = (props) => {

    return (
        <div className={s.dialogs_page}>
            <div className={s.dialogs}>
                <div className={s.message_item}>
                    {props.state.users.map((user, key) =>
                        (<DialogItem key={user.id} id={user.id} name={user.name} avatarUrl={user.avatarUrl}/>))}
                </div>

            </div>
            <div className={s.messages}>

                    {props.state.messages.map((message, key) => {
                        let randomUser = Math.floor(Math.random() * (props.state.users.length));
                        console.log("type:"+message.type);
                        return (
                            <div className={(message.type=="from")?s.friend_message:s.self_message}>
                            <Message key={message.id} username={props.state.users[randomUser].name}
                                     message={message.text} type={message.type} avatar={props.state.users[randomUser].avatarUrl}/>
                            </div>
                        )

                    })}



            </div>
        </div>
    )
}

export default Messages;