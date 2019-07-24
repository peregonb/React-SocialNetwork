import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = props => {
  return (
    <div className={s.section}>
      <div className={`${s.block} + ${s.dialogs}`}>
          <DialogItem id="1" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem id="2" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem id="3" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem id="4" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem id="5" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
        
      </div>
      
      <div className={s.message_section}>
      <div className={`${s.block} + ${s.messages}`}>

          <Message message="Привет"/>
          <Message message="Как там твой курс по реакту?" extraClass="true"/>
          <Message message="Все отлично, все клубнично"/>
      </div>
      <textarea className={`${s.block} + ${s.writearea}`} placeholder="Введите ссобщение">
        
      </textarea>
      </div>
    </div>
  );
};

export default Dialogs;
