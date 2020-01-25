import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

const Dialogs = props => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(d => (
        <DialogItem id={d.id} img={d.imageUrl} key={d.id}/>
    ))

    // if (!props.isAuth) return <Redirect to={"/login"}/>

    let addNewMessage = (values) => {
        props.sendMessage(values.messageFormTextarea)
    }

    return (
        <div className={s.section}>
            <div className={`${s.block} + ${s.dialogs}`}>{dialogsElements}</div>
            <DialogsFormRedux state={props} onSubmit={addNewMessage}/>
        </div>
    )
}

const DialogsForm = props => {
    let state = props.state.dialogsPage;
    let messageElements = state.messageData.map(m => (
        <Message id={m.id} message={m.message} extraClass={m.extraClass} key={m.id}/>
    ))


    return (
        <form className={s.message_section} onSubmit={props.handleSubmit}>
            <div className={`${s.block} + ${s.messages}`}>{messageElements}</div>
            <div className={s.textareaWrapper}>
                <Field className={`${s.block} + ${s.textarea}`} component={"textarea"}
                       name={"messageFormTextarea"} placeholder="Введите сообщение"/>
                {/*<textarea value={state.newMessageText} onChange={messageChange}/>*/}
                <div className={s.buttonWrapper}>
                    <button className={s.buttonSend + ` icon-back-left-arrow-curve-symbol`}/>
                </div>
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: "dialogAddMessageForm"})(DialogsForm)

export default Dialogs
