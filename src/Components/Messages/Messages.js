import s from './Messages.module.scss'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import SendMessage from "./SendMessage/SendMessage";



export const Messages = (props) => {
    let dialog_with_user =  props.state.messages.map((message, key) => {
            let randomUser = Math.floor(Math.random() * (props.state.users.length));
            return (
                <div className={(message.type=="from")?s.friend_message:s.self_message}>
                    <Message key={message.id} username={(message.type=="from")?props.state.users[0].name:props.state.users[1].name}
                             message={message.text} type={message.type} avatar={(message.type=="from")?props.state.users[0].avatarUrl:props.state.users[1].avatarUrl}/>
                </div>
            )

        });
    let dialog_list = props.state.users.map((user, key) =>
            (<DialogItem key={user.id} id={user.id} name={user.name} avatarUrl={user.avatarUrl}/>));

    return (
        <div className={s.dialogs_page}>
            <div className={s.dialogs}>
                <div className={s.message_item}>
                    {dialog_list}
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog_with_user}>{dialog_with_user}</div>
                <SendMessage sendMessage={props.sendMessage} updateMessageText={props.updateMessageText} currentText={props.state.newMessageText} />
            </div>
        </div>
    )
}

export default Messages;