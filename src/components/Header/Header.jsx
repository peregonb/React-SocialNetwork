import React from "react";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";
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
                    <NavLink to={process.env.PUBLIC_URL + "/"} className={s.logo}>
                        i<span>:</span>røvet
                    </NavLink>
                    <div className={s.menu}>
                        <NightMode/>
                        {props.isAuth ?
                            <>
                                <div className={s.item}>{props.login}</div>
                                <div onClick={logout} className={s.item}>Выйти</div>
                            </>
                            :
                            <div className={s.item}>Настройки</div>
                        }
                    </div>
                </div>
            </div>

            {props.isAuth && <HeaderMobile/>}
        </div>
    );
};

export default Header;
