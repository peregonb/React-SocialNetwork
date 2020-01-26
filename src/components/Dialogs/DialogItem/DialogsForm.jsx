import React from 'react'
import s from '.././Dialogs.module.scss'
import Message from '.././Message/Message'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsFields/formsFields";

const maxLengthValidator = maxLengthCreator(30);

const DialogsForm = props => {
    let state = props.state.dialogsPage;
    let messageElements = state.messageData.map(m => (
        <Message id={m.id} message={m.message} extraClass={m.extraClass} key={m.id}/>
    ))

    return (
        <form className={s.message_section} onSubmit={props.handleSubmit}>
            <div className={`${s.block} + ${s.messages}`}>{messageElements}</div>
            <div className={s.textareaWrapper}>
                <Field className={`${s.block} + ${s.textarea}`} component={Textarea}
                       name={"messageFormTextarea"} placeholder="Введите сообщение"
                       validate={[requiredField, maxLengthValidator]}/>
                {/*<textarea value={state.newMessageText} onChange={messageChange}/>*/}
            </div>
        </form>
    )
}

const DialogsFormRedux = reduxForm({form: "dialogAddMessageForm"})(DialogsForm)

export default DialogsFormRedux
