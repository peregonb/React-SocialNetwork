import React from 'react'
import s from './Users.module.scss'
import userPhoto from '../../assets/img/user.svg'
import {NavLink} from 'react-router-dom'

const User = ({user, followDisabledValue, unfollowTC, followTC}) => {

    return (
        <div key={user.id} className={s.item}>
            <NavLink to={process.env.PUBLIC_URL + '/profile/id' + user.id}>
                <div className={s.img} style={
                    {backgroundImage: user.photos.small ? "url('" + user.photos.small + "')" : "url('" + userPhoto + "')"}
                }/>
                <div className={s.name}>{user.name}</div>
            </NavLink>

            <div className={s.country}>
                user.location.country <br/> user.location.city
            </div>
            <div className={s.status}>{user.status}</div>
            {user.followed ? (
                <button disabled={followDisabledValue.some(id => id === user.id)} onClick={() => {
                    unfollowTC(user.id)
                }}>
                    Отписаться
                </button>
            ) : (
                <button disabled={followDisabledValue.some(id => id === user.id)} onClick={() => {
                    followTC(user.id)
                }}>
                    Подписаться
                </button>
            )}
        </div>

    )
};

export default User
