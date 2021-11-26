import s from './SendMessage.module.scss'
import React from "react";


export const SendMessage = (props) => {

    let messageValue = React.createRef();

    let updateMessage = () => {
    let text=messageValue.current.value;
    props.updateMessageText(text);
    }
    let clearMessageArea = () =>{
        props.updateMessageText('');
    }


    return (
        <div className={s.message_container}>

          {/*  <div className={s.message_text} ref={messageValue} onChange={updateMessage} contentEditable="true"
                 text={'Введите сообщение'}>

            </div>*/}
            <textarea  className={s.message_text} ref={messageValue} onChange={updateMessage} onClick={clearMessageArea}
                      value={props.currentText}/>
            <button onClick={props.sendMessage} className={s.send_message}>Отправить</button>
        </div>
    );

}

export default SendMessage;