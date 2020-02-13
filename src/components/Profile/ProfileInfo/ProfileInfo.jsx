import React from "react";
import s from "../Profile.module.scss";
import Preloader from "../../common/Preloader/preloader";
import Socials from "./Socials";
import userPhoto from '../../../assets/img/user.svg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={s.block}>
            <img src={profile.photos.large ? profile.photos.large : userPhoto} className={s.avatar}/>
            <div className={s.blockRight}>
                <div className={s.description}>
                    <div className={s.name}>{profile.fullName}</div>
                    <ProfileStatusWithHooks aboutMe={profile.aboutMe === null ? false : profile.aboutMe} status={status} updateStatus={updateStatus}/>
                </div>
                <Socials profile={profile}/>
            </div>
        </div>
    )
};

export default ProfileInfo;