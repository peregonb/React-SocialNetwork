import React from "react";
import s from "./Dialogs.module.scss";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = props => {
  return (
    <div className={s.section}>
      <div className={`${s.block} + ${s.dialogs}`}>
          <DialogItem name="Виталик" id="1" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem name="Богдан" id="2" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem name="Леха" id="3" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem name="Дмитрий" id="4" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
          <DialogItem name="Александр" id="5" img="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"/>
        
      </div>
      
      <div className={s.message_section}>
      <div className={`${s.block} + ${s.messages}`}>

          <Message message="Привет"/>
          <Message message="Как там твой курс по реакту?" extraClass="true"/>
          <Message message="Все отлично, все клубнично"/>
      </div>
      <div className={`${s.block} + ${s.writearea}`}>
        <textarea></textarea>
        <button>Отправить</button>
      </div>
      </div>
    </div>
  );
};

export default Dialogs;
