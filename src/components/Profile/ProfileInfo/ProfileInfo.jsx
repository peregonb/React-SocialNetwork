import React from "react";
import s from "../Profile.module.scss";

const ProfileInfo = props => {
    return(
        <div className={s.block}>
        <img
          src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"
          className={s.avatar}
        />
        <div className={s.description}>
          <div className={s.name}>Перегон Богдан</div>
          <div className={s.excerpt}>Обычный парень, мечтатель</div>
        </div>
      </div>
    )
}

export default ProfileInfo;