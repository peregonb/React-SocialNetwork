import React from 'react'
import s from './Users.module.scss'
import * as Axios from 'axios'
import userPhoto from '../../img/user-small.png'

class Users extends React.Component {
  componentDidMount() {
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    })
  }

  onPageChange = pageNumber => {
    this.props.setCurrentPage(pageNumber)
    Axios.get(
      `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
    ).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
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
                  this.onPageChange(p)
                }}
                className={this.props.currentPage === p && s.selected}>
                {p}
              </span>
            )
          })}
        </div>

        <div className={s.wrapper}>
          {this.props.users.map(u => (
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
                    this.props.unfollow(u.id)
                    this.unfollow(u.id)
                  }}>
                  Отписаться
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id)
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
}

export default Users
