import React from 'react'
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.scss'

const Profile = props => {

    return (
        <div className={s.profileWrapper}>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
