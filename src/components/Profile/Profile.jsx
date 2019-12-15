import React from 'react'
import PostsContainer from './Posts/PostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import s from './Profile.module.scss'
import {Redirect} from "react-router-dom";

const Profile = props => {



    return (
        <div className={s.profileWrapper}>
            <ProfileInfo profile={props.profile}/>
            <PostsContainer/>
        </div>
    )
}

export default Profile
