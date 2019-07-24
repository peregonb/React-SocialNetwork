import React from "react";
import s from "./Message.module.scss";

const Message = (props) =>{

  let extraClass = props.extraClass === "true" ? s.right : s.left;

    return(
      <div className={`${s.message} ${extraClass}`}>{props.message}</div>
    )
}


export default Message;
