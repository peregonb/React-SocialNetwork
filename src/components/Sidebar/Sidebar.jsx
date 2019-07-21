import React from "react";
import s from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.item}>
        <a href="/profile">Профиль</a>
      </div>
      <div className={s.item}>
        <a href="/dialogs">Сообщения</a>
      </div>
      <div className={s.item}>
        <a href="/profile">Новости</a>
      </div>
      <div className={s.item}>
        <a href="/profile">Музыка</a>
      </div>
      <div className={s.item}>
        <a href="/profile">Настройки</a>
      </div>
    </div>
  );
};

export default Sidebar;
