import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/img/user.svg'
import {PaginationUsers} from './PaginationUsers'
import {NavLink} from 'react-router-dom'
import {followingAPI} from "../../api/api";

let Users = props => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.wrap}>
            <div className={s.wrapper}>
                {props.users.map(u => (
                    <div key={u.id} className={s.item}>
                        <NavLink to={'/profile/id' + u.id}>
                            <div className={s.img} style={
                                {backgroundImage: u.photos.small ? "url('" + u.photos.small + "')" : "url('" + userPhoto + "')"}
                            }/>
                            <div className={s.name}>{u.name}</div>
                        </NavLink>

                        <div className={s.country}>
                            u.location.country <br/> u.location.city
                        </div>
                        <div className={s.status}>{u.status}</div>
                        {u.followed ? (
                            <button disabled={props.followDisabledValue.some(id => id === u.id)} onClick={() => {
                                props.followDisabled(true, u.id);
                                followingAPI.deleteUnfollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.followDisabled(false, u.id);
                                })
                            }}>
                                Отписаться
                            </button>
                        ) : (
                            <button disabled={props.followDisabledValue.some(id => id === u.id)} onClick={() => {
                                debugger
                                props.followDisabled(true, u.id);
                                followingAPI.postFollow(u.id).then(data => {
                                    if (data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.followDisabled(false, u.id);
                                })
                            }}>
                                Подписаться
                            </button>
                        )}
                    </div>
                ))}
            </div>

            < PaginationUsers
                pagesCount={pagesCount}
                pages={pages}
                onPageChange={props.onPageChange}
                currentPage={props.currentPage}
            />
        </div>
    )
}

export default Users
