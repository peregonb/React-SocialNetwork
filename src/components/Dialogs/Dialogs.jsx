import React from "react";
import s from "./Dialogs.module.scss";
// import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import $ from "jquery";


const Dialogs = props => {
   
  let dialogsElements = props.state.dialogsData.map(d => <DialogItem id={d.id} img={d.imageUrl}/>);
  let messageElements = props.state.messageData.map(m => <Message id={m.id} message={m.message} extraClass={m.extraClass} />);

  let textareaElement = React.createRef();
  let sendMessage = () => {
    alert(textareaElement.current.value)
  }

  return (
    <div className={s.section}>
      <div className={`${s.block} + ${s.dialogs}`}>
          {dialogsElements}
      </div>
      
      <div className={s.message_section}>
      <div className={`${s.block} + ${s.messages}`}>

          {messageElements}
          
      </div>
      <textarea ref={textareaElement} className={`${s.block} + ${s.writearea}`} placeholder="Введите сообщение">
        
      </textarea>
      <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
};

export default Dialogs;
