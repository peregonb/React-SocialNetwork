import React from "react";
import s from "./Users.module.scss";
import * as Axios from "axios";
import userPhoto from "../../img/user-small.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      response => {
        this.props.setUsers(response.data.items);
      }
    );
  }

  render() {
    return (
      <div className={s.wrapper}>
        {this.props.users.map(u => (
          <div key={u.id} className={s.item}>
            <div
              className={s.img}
              style={
                // {backgroundImage: 'url(' + u.photos.small == null ? u.photos.small : userPhoto + ')'}
                {
                  backgroundImage:
                    u.photos.small != null
                      ? "url('" + u.photos.small + "')"
                      : "url('" + userPhoto + "')"
                }
              }
            ></div>

            <div className={s.name}>{u.name}</div>
            <div className={s.country}>
              {"u.location.country, u.location.city"}
            </div>
            <div className={s.status}>{u.status}</div>
            {u.followed ? (
              <button
                onClick={() => {
                  this.props.unfollow(u.id);
                }}
              >
                Отписаться
              </button>
            ) : (
              <button
                onClick={() => {
                  this.props.follow(u.id);
                }}
              >
                Подписаться
              </button>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
