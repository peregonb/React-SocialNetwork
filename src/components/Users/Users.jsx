import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../img/user-small.png'

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  return (
    <div className={s.wrap}>
      <div className={s.pagi}>
        {pages.map(p => {
          return (
            <span
              onClick={() => {
                props.onPageChange(p)
              }}
              className={props.currentPage === p && s.selected}>
              {p}
            </span>
          )
        })}
      </div>

      <div className={s.wrapper}>
        {props.users.map(u => (
          <div key={u.id} className={s.item}>
            <div
              className={s.img}
              style={
                // {backgroundImage: 'url(' + u.photos.small == null ? u.photos.small : userPhoto + ')'}
                {
                  backgroundImage:
                    u.photos.small !== null
                      ? "url('" + u.photos.small + "')"
                      : "url('" + userPhoto + "')",
                }
              }></div>
            <div className={s.name}>{u.name}</div>
            <div className={s.country}>
              u.location.country <br /> u.location.city
            </div>
            <div className={s.status}>{u.status}</div>
            {u.followed ? (
              <button
                onClick={() => {
                  props.unfollow(u.id)
                }}>
                Отписаться
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(u.id)
                }}>
                Подписаться
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users
