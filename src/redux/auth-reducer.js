import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                // isAuth: true
            };

        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth},
        isAuth: true
    };
};


export const getAuthTC = () => async dispatch => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
};

export const postAuthTC = (formData) => async dispatch => {
    let data = await authAPI.postAuth(formData.login, formData.password, formData.rememberMe);
    if (data.resultCode === 0) {
        dispatch(getAuthTC())
    } else {
        let message = data.messages > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};

export const deleteAuthTC = () => async dispatch => {
    let data = await authAPI.deleteAuth();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};


export default authReducer;
