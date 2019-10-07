import React from "react";
import s from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {


  // сделать иконку для юзеров

  return (
    <div className={s.sidebar}>
      {/* <div className={`${s.item} icon-avatar`}>
        <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
      </div> */}
      <div className={`${s.item} icon-envelope`}>
        <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
      </div>
      <div className={`${s.item} icon-avatar`}>
        <NavLink to="/users" activeClassName={s.active}>Пользователи</NavLink>
      </div>
      <div className={`${s.item} icon-newspaper`}>
        <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
      </div>
      <div className={`${s.item} icon-music-player`}>
        <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
      </div>
      {/* <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink>
      </div> */}
    </div>
  );
};

export default Sidebar;
