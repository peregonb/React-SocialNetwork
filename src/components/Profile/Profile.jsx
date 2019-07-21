import React from "react";
import s from './Profile.module.scss';
import Posts from './Posts/Posts';

const Profile = () => {
    return(
      <div>
            <div className={s.block}>
              <img src="" className={s.avatar} />
              <div className={s.description}>
                <div className={s.name}>Перегон Богдан</div>
                <div className={s.excerpt}>Обычный парень, мечтатель</div>
              </div>
            </div>

            
            <Posts/>
          </div>
    )
}

export default Profile;