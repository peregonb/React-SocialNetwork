import React from "react";
import s from "./Users.module.scss";

const Users = props => {
  // debugger
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 0,
        followed: true,
        status: "День прошел, число сменилось, ничего не изменилось.",
        imgSrc: "https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg",
        fullName: "Богдан Вавилов",
        location: { city: "Минск", country: "Беларусь" }
      },
      {
        id: 1,
        followed: false,
        status: "Держи тело в тонусе, а мнение в анусе",
        imgSrc: "https://avatarko.ru/img/kartinka/14/igrushka_mysh_13852.jpg",
        fullName: "Иван Капустин",
        location: { city: "Киев", country: "Украина" }
      },
      {
        id: 2,
        followed: false,
        status: "Надеюсь это не Эбола",
        imgSrc: "https://mrhvost.com/wp-content/uploads/2019/03/hameleon.jpg",
        fullName: "Василий Картошкин",
        location: { city: "Бровары", country: "Украина" }
      },
      {
        id: 3,
        followed: true,
        status: "День прошел, за ним другой, что ж со мной случилось, Боже мой..",
        imgSrc:
          "http://simple-fauna.ru/wp-content/uploads/2017/10/obyknovennaya-belka.jpg",
        fullName: "Илья Давыдов",
        location: { city: "Москва", country: "Россия" }
      }
    ]);
  }

  return (
    <div className={s.wrapper}>
      {props.users.map(u => (
        <div key={u.id} className={s.item}>
          <div className={s.img} style={{backgroundImage: 'url(' + u.imgSrc + ')'}}></div>
          <div className={s.name}>{u.fullName}</div>
          <div className={s.country}>
            {u.location.country + ", " + u.location.city}
          </div>
          <div className={s.status}>{u.status}</div>
          {u.followed ? (
            <button
              onClick={() => {
                props.unfollow(u.id);
              }}
            >
              Отписаться
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(u.id);
              }}
            >
              Подписаться
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Users;
