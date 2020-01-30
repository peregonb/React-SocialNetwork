import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";

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


export const getAuthTC = () => dispatch => {
        return authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const postAuthTC = (formData) => dispatch => {
    authAPI.postAuth(formData.login, formData.password, formData.rememberMe).then(data => {
        if (data.resultCode === 0) {
            console.log('logged')
            dispatch(getAuthTC())
        }
        else{
            let message = data.messages > 0 ? data.messages[0] : "Some error"
            dispatch(stopSubmit("login",{_error: message}));
        }
    })
}

export const deleteAuthTC = () => dispatch => {
    authAPI.deleteAuth().then(data => {
        if (data.resultCode === 0) {
            console.log('unlogged')
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}


export default authReducer;
