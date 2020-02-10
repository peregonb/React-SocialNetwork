import React, {useState, useEffect} from "react";
import s from "../Profile.module.scss";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {setStatus(props.status)},[props.status]);

    const enableEditMode = () => {
        setEditMode(true);
    };
    const disableEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.target.value)
    };

    const returnStatus = () => {
        if (props.status === "") {
            return <span onClick={enableEditMode} style={{opacity: '.5'}}>Введите статус</span>
        } else if (props.status === null) {
            return <span style={{opacity: '.5'}}>Статус не заполнен</span>
        } else {
            return <span onClick={enableEditMode}>{props.status}</span>
        }
    }

    return (
        <div className={s.excerpt}>
            {!editMode ?
                returnStatus()
                :
                <input className={s.input}
                       value={status}
                       autoFocus={true}
                       onBlur={disableEditMode}
                       onChange={(e) => {onStatusChange(e)}}
                       type="text"/>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;