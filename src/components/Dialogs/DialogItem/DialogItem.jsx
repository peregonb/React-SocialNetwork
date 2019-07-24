import React from "react";
import s from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <NavLink to={"/dialogs/" + props.id} className={s.dialogs_item}>
          <img
            className={s.img}
            src={props.img}
            alt=""
          />
          {/* <div className={s.name}>{props.name}</div> */}
        </NavLink>
    )
}


export default DialogItem;
