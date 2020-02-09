import {profileAPI} from "../api/api";
import s from "../components/Header/Header.module.scss";

const ADD_POST = "ADD-POST",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_STATUS = "SET-STATUS",
    NIGHT_MODE = "NIGHT_MODE";

let initialState = {
    postData: [
        {
            id: 0,
            message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            name: "Богдан Перегон",
            likeCount: 4
        },
        {
            id: 1,
            message: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            name: "Богдан Перегон",
            likeCount: 6
        },
        {
            id: 2,
            message: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            name: "Богдан Перегон",
            likeCount: 8
        }
    ],
    // newPostText: "",
    profile: null,
    status: "",
    buttonClass: s.nightModeSwitch,
    tooltipMessage: "Ночной режим",
    bodyClass: document.body.setAttribute("theme", "day")
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.newPostText,
                name: "Богдан Перегон",
                likeCount: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
            };


        case SET_USER_PROFILE :
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS :
            return {
                ...state,
                status: action.statusText
            };

        case NIGHT_MODE:
            return {
                ...state,
                buttonClass: action.buttonClass,
                tooltipMessage: action.tooltipMessage,
                bodyClass: action.bodyClass
            };

        default:
            return state;
    }
};

export const nightMode = (buttonClass, tooltipMessage, bodyClass) => {
    return {
        type: NIGHT_MODE,
        buttonClass,
        tooltipMessage,
        bodyClass
    };
};

export const setStatus = status => {
    return {
        type: SET_STATUS,
        statusText: status
    };
};
export const getStatusTC = (userIdUri) => dispatch => {
    profileAPI.getStatus(userIdUri).then(response => {
        dispatch(setStatus(response.data))
    })
};

export const updateStatusTC = (status) => {
    return dispatch => {
        profileAPI.updateStatus(status).then(data => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }
};

export const addPostActionCreator = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    };
};
export const setUserProfile = profile => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    };
};


export const setUserProfileTC = (userIdUri) => {
    return dispatch => {
        profileAPI.getProfile(userIdUri).then(data => {
            dispatch(setUserProfile(data))
        })
    }
};

export default profileReducer;