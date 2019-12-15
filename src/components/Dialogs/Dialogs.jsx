import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Redirect} from "react-router-dom";

const Dialogs = props => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogsData.map(d => (
    <DialogItem id={d.id} img={d.imageUrl} key={d.id} />
  ))

  let messageElements = state.messageData.map(m => (
    <Message id={m.id} message={m.message} extraClass={m.extraClass} key={m.id} />
  ))

  let textareaElement = React.createRef()

  let sendMessage = () => {
    props.sendMessage(textareaElement)
  }

  let messageChange = () => {
    let messageText = textareaElement.current.value
    props.updateNewMessageTextAction(messageText)
  }

  // if (!props.isAuth) return <Redirect to={"/login"}/>

  return (
    <div className={s.section}>
      <div className={`${s.block} + ${s.dialogs}`}>{dialogsElements}</div>

      <div className={s.message_section}>
        <div className={`${s.block} + ${s.messages}`}>{messageElements}</div>
        <div className={s.textareaWrapper}>
          <textarea
            ref={textareaElement}
            className={`${s.block} + ${s.textarea}`}
            placeholder="Введите сообщение"
            value={state.newMessageText}
            onChange={messageChange}
          />
          <div className={s.buttonWrapper}>
            <button
              className={s.buttonSend + ` icon-back-left-arrow-curve-symbol`}
              onClick={sendMessage}></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
