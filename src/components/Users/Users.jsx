import React from "react";
import s from "./Users.module.scss";
import * as Axios from "axios";
import userPhoto from "../../img/user-small.png";

class Users extends React.Component {
  
  componentDidMount() {
    Axios.get("https://react-sn-f6e7a.firebaseio.com/users.json").then(
      response => {
        this.props.setUsers(response.data);
        console.log(response.data[0])
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
                // {backgroundImage: 'url(' + u.photo == null ? u.photo : userPhoto + ')'}
                {
                  backgroundImage:
                    u.photo.length
                      ? "url('"+ u.photo +"')"
                      : "url('" + userPhoto + "')"
                }
              }
            ></div>

            <div className={s.name}>{u.fullName}</div>
            <div className={s.country}>
              {u.location.country + " " + u.location.city}
            </div>
            <div className={s.status}>{u.status}</div>
            {u.followed ? (
              <button
                onClick={() => {
                  this.props.unfollow(u.id);
                  this.unfollow(u.id)
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
