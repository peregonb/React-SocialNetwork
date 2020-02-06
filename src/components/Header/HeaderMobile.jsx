import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const HeaderMobile = () => {
    return (
            <div className={s.footer}>
                <NavLink to={process.env.PUBLIC_URL + "/dialogs"} className={`${s.link} icon-envelope`}>
                    Сообщения
                </NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/users"} className={`${s.link} icon-avatar`}>
                    Друзья
                </NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/music"} className={`${s.link} icon-music-player`}>
                    Музыка
                </NavLink>
                <NavLink to={process.env.PUBLIC_URL + "/news"} className={`${s.link} icon-newspaper`}>
                    Новости
                </NavLink>
            </div>
    );
};

export default HeaderMobile;
