import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import NightMode from "./NightMode";

const Header = () => {
    return (
        <div className="">
            <header className={s.header}>
                <div className={`${s.wrap} wrap`}>
                    <NavLink to="/profile" className={s.logo}>
                        i<span>:</span>røvet
                    </NavLink>
                    <div className={s.menu}>
                        <NightMode/>
                        <div className={s.item}>Настройки</div>
                        <div className={s.item}>Войти</div>
                    </div>
                </div>
            </header>
            <div className={s.footer}>

                <NavLink to="/dialogs" className={`${s.link} icon-envelope`}>
                    Сообщения
                </NavLink>
                <NavLink to="/users" className={`${s.link} icon-avatar`}>
                    Друзья
                </NavLink>
                <NavLink to="/music" className={`${s.link} icon-music-player`}>
                    Музыка
                </NavLink>
                <NavLink to="/news" className={`${s.link} icon-newspaper`}>
                    Новости
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
