import React from "react";

const Users = props => {
// debugger
     if (props.users.length === 0){
        props.setUsers([
            {
                id: 0,
                followed: true,
                status: "статус пользователя",
                fullName: "Богдан Вавилов",
                location: { city: "Минск", country: "Беларусь" }
              },
              {
                id: 1,
                followed: false,
                status: "статус пользователя",
                fullName: "Иван Капустин",
                location: { city: "Киев", country: "Украина" }
              },
              {
                id: 2,
                followed: false,
                status: "статус пользователя",
                fullName: "Василий Картошкин",
                location: { city: "Бровары", country: "Украина" }
              },
              {
                id: 3,
                followed: true,
                status: "статус пользователя",
                fullName: "Илья Давыдов",
                location: { city: "Москва", country: "Россия" }
              }
          ]
          );
     }


  return (
    <div>
      {props.users.map(u => (
        <div key={u.id}>
          <div className="">
            {u.fullName}, {u.status}, {u.location.city}, {u.location.country}
            <div className="">
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
