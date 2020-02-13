import React from "react";
import s from "./formFields.module.scss";

// export const inputField = ({input, meta: {touched, error}, ...props}, fieldType) => {
//     const hasError = touched && error;
//
//     return (
//         <div className={s.textareaWrapper + " " + (hasError ? s.error : "")}>
//             {fieldType === "textarea" ? <textarea {...input} {...props}/> : <input {...input} {...props}/>}
//             <span>{error}</span>
//             {fieldType === "textarea" && <TextareaButton/>}
//         </div>
//     )
// };

export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={s.textareaWrapper + " " + (hasError ? s.error : "")}>
            <textarea {...input} {...props}/>
            <span>{error}</span>
            <TextareaButton/>
        </div>
    )
};

export const Input = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={s.textareaWrapper + " " + (hasError ? s.error : "")}>
            <input {...input} {...props}/>
            <span>{error}</span>
        </div>
    )
};

export const TextareaButton = () => {
    return (
        <div className={s.buttonWrapper}>
            <button className={s.buttonSend + ` icon-back-left-arrow-curve-symbol`}/>
        </div>
    )
};
