import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST",
    UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT",
    SET_USER_PROFILE = "SET-USER-PROFILE",
    SET_STATUS = "SET-STATUS";

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
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                name: "Богдан Перегон",
                likeCount: 0
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: ""
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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

        default:
            return state;
    }
};
export const setStatus = status => {
    return {
        type: SET_STATUS,
        statusText: status
    };
};
export const getStatusTC = (userIdUri) => {
    return dispatch => {
        profileAPI.getStatus(userIdUri).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatusTC = (status) => {
    return dispatch => {
        profileAPI.updateStatus(status).then(data => {
            if(data.resultCode === 0){
                dispatch(setStatus(status))
            }
        })
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    };
};
export const updatePostTextActionCreator = text => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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
}

export default profileReducer;
