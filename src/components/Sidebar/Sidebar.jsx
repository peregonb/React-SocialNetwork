import React from "react";
import s from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {


  // сделать иконку для юзеров

  return (
    <div className={s.sidebar}>
    <div className={s.sidebarFixed}>
      {/* <div className={`${s.item} icon-avatar`}>*/}
      {/*  <NavLink to="/homepage" activeClassName={s.active}>Профиль</NavLink>*/}
      {/*</div>*/}
      <div className={`${s.item} icon-envelope`}>
        <NavLink to={process.env.PUBLIC_URL + "/dialogs"} activeClassName={s.active}>Сообщения</NavLink>
      </div>
      <div className={`${s.item} icon-avatar`}>
        <NavLink to={process.env.PUBLIC_URL + "/users"} activeClassName={s.active}>Пользователи</NavLink>
      </div>
      <div className={`${s.item} icon-newspaper`}>
        <NavLink to={process.env.PUBLIC_URL +"/news"} activeClassName={s.active}>Новости</NavLink>
      </div>
      <div className={`${s.item} icon-music-player`}>
        <NavLink to={process.env.PUBLIC_URL + "/music"} activeClassName={s.active}>Музыка</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={process.env.PUBLIC_URL + "/login"} activeClassName={s.active}>Login</NavLink>
      </div>
      {/* <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink>
      </div> */}
    </div>
    </div>
  );
};

export default Sidebar;
