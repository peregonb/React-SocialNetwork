import React from 'react'
import s from './Users.module.scss'
import {Pagination} from '../common/Pagination/Pagination'
import User from './User';

let Users = props => {

    return (
        <div className={s.wrap}>
            <div className={s.wrapper}>
                {props.users.map(u => (
                    <User user={u}
                          key={u.id}
                          followDisabledValue={props.followDisabledValue}
                          unfollowTC={props.unfollowTC}
                          followTC={props.followTC}/>
                ))}
            </div>

            < Pagination
                onPageChange={props.onPageChange}
                currentPage={props.currentPage}
                totalUsersCount={props.totalUsersCount}
                pageSize={props.pageSize}
            />
        </div>
    )
};

export default Users
