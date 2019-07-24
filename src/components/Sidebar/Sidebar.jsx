import React from "react";
import s from "./Sidebar.module.scss";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>Профиль</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>Сообщения</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>Новости</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
      </div>
      {/* <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.active}>Настройки</NavLink>
      </div> */}
    </div>
  );
};

export default Sidebar;
