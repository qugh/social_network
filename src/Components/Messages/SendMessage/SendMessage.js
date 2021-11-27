import s from './SendMessage.module.scss'
import React from "react";


export const SendMessage = (props) => {

    let messageValue = React.createRef();

    let updateMessage = () => {
        let text = messageValue.current.value;
        props.dispatch({
            type: 'UPDATE-NEW-TEXT-MESSAGE',
            newMessageText: text
        });
    }
    let clearMessageArea = () => {
        props.dispatch({
            type: 'UPDATE-NEW-TEXT-MESSAGE',
            newMessageText: ''
        });
    }
    let addPost = () => {
        props.dispatch({
            type: 'SEND-MESSAGE'
        });
    }


    return (
        <div className={s.message_container}>


            <textarea className={s.message_text} ref={messageValue} onChange={updateMessage} onClick={clearMessageArea}
                      value={props.currentText}/>
            <button onClick={addPost} className={s.send_message}>Отправить
            </button>
        </div>
    );

}

export default SendMessage;