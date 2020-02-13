import React from 'react'
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.scss'

const Profile = ({status, updateStatus, profile}) => {
    return (
        <div className={s.profileWrapper}>
            <ProfileInfo status={status} updateStatus={updateStatus} profile={profile}/>
            <PostsContainer/>
        </div>
    )
};

export default Profile
