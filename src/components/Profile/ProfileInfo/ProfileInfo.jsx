import React from "react";
import s from "../Profile.module.scss";
import Preloader from "../../common/Preloader/preloader";
import Socials from "./Socials";
import userPhoto from '../../../img/user.svg';

const ProfileInfo = props => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.block}>
            <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto} className={s.avatar} />
            <div className={s.blockRight}>
                <div className={s.description}>
                <div className={s.name}>{props.profile.fullName}</div>
                <div className={s.excerpt}>{props.profile.aboutMe ? props.profile.aboutMe : <span style={{opacity: "0.5"}}>"Не заполнено"</span>}</div>
            </div>
            <Socials profile={props.profile}/>
            </div>
        </div>
    )
}

export default ProfileInfo;