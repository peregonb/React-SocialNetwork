import React from "react";
import s from './Header.module.scss';

const Header = () => {
    return(
        <header className={s.header}>
        <div className={`${s.wrap} wrap`}>
          <div className={s.logo}>LOGO</div>
          <div className={s.menu}>
            <div className={s.item}>Пункт 1</div>
            <div className={s.item}>Пункт 2</div>
            <div className={s.item}>Пункт 3</div>
          </div>
        </div>
      </header>
    )
}

export default Header;