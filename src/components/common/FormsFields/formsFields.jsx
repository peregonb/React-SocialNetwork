import React from "react";
import s from "./formFields.module.scss";

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.textareaWrapper + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            <span>{meta.error}</span>
            <TextareaButton/>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.textareaWrapper + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            <span>{meta.error}</span>
        </div>
    )
}

export const TextareaButton = () => {
    return (
        <div className={s.buttonWrapper}>
            <button className={s.buttonSend + ` icon-back-left-arrow-curve-symbol`}/>
        </div>
    )
}