import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import NightMode from "./NightMode";
import HeaderMobile from "./HeaderMobile";

const Header = (props) => {
    // debugger
    return (
        <div className="">
            <div className={s.header}>
                <div className={`${s.wrap} wrap`}>
                    <NavLink to="/profile" className={s.logo}>
                        i<span>:</span>røvet
                    </NavLink>
                    <div className={s.menu}>
                        <NightMode/>
                        <div className={s.item}>Настройки</div>
                        {props.isAuth ? <div className={s.item}>{props.login}</div> : <NavLink to={'/login'} className={s.item}>Войти</NavLink>}
                    </div>
                </div>
            </div>

            <HeaderMobile/>
        </div>
    );
};

export default Header;
