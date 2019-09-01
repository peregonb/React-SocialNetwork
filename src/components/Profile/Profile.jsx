import React from "react";
import s from "./Profile.module.scss";
import Posts from "./Posts/Posts";

const Profile = props => {
  return (
    <div>
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
      <Posts
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
