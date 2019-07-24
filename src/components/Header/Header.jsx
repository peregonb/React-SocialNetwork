import React from "react";
import s from './Header.module.scss';

const Header = () => {
    return(
        <header className={s.header}>
        <div className={`${s.wrap} wrap`}>
          <div className={s.logo}>LOGO</div>
          <div className={s.menu}>
            <div className={s.item}>Настройки</div>
            <div className={s.item}>Войти</div>
          </div>
        </div>
      </header>
    )
}

export default Header;