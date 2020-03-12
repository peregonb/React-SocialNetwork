import {getAuthTC} from "./auth-reducer";

const SET_INIT = "SET-INIT";

let initialState = {
    init: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                init: true
            };

        default:
            return state;
    }
};

export const inited = () => {
    return {
        type: SET_INIT
    };
};


export const initApp = () => dispatch => {
    let promise = dispatch(getAuthTC());

    Promise.all([promise]).then(() => {
        dispatch(inited())
    })
}

export default appReducer;