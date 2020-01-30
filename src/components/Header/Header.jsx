import React from "react";
import s from "./Header.module.scss";
import {NavLink, Redirect} from "react-router-dom";
import NightMode from "./NightMode";
import HeaderMobile from "./HeaderMobile";


const Header = (props) => {
    const logout = () => {
        props.deleteAuthTC()
    }

    return (
        <div className="">
            <div className={s.header}>
                <div className={`${s.wrap} wrap`}>
                    <NavLink to="/profile" className={s.logo}>
                        i<span>:</span>røvet
                    </NavLink>
                    <div className={s.menu}>
                        <NightMode/>
                        {/*<div className={s.item}>Настройки</div>*/}
                        {props.isAuth ?
                            <>
                                <div className={s.item}>{props.login}</div>
                                <div onClick={logout} className={s.item}>Выйти</div>
                            </>
                            : <NavLink to={'/login'} className={s.item}>Войти</NavLink>}
                    </div>
                </div>
            </div>

            <HeaderMobile/>
        </div>
    );
};

export default Header;
