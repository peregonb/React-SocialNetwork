import React from "react";
import s from "../Profile.module.scss";
import Preloader from "../../common/Preloader/preloader";
import Socials from "./Socials";
import userPhoto from '../../../assets/img/user.svg';
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = props => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.block}>
            <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} className={s.avatar}/>
            <div className={s.blockRight}>
                <div className={s.description}>
                    <div className={s.name}>{props.profile.fullName}</div>
                    <ProfileStatus aboutMe={props.profile.aboutMe === null ? false : props.profile.aboutMe} status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <Socials profile={props.profile}/>
            </div>
        </div>
    )
}

export default ProfileInfo;