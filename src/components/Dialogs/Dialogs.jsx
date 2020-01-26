import React from 'react'
import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import {Redirect} from "react-router-dom";
import DialogsFormRedux from "./DialogItem/DialogsForm";

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


export default Dialogs
