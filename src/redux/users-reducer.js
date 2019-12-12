import {followingAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_FETCHING = 'TOGGLE-FETCHING',
    FOLLOW_DISABLED = 'FOLLOW-DISABLED'

let initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followDisabledValue: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        case FOLLOW_DISABLED:
            return {
                ...state,
                followDisabledValue: action.isFetching ?
                    [...state.followDisabledValue, action.userId] :
                    state.followDisabledValue.filter(id => id != action.userId)
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }

        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        default:
            return state
    }
}

export const follow = userID => {
    return {
        type: FOLLOW,
        userID,
    }
}
export const followDisabled = (isFetching, userId) => {
    return {
        type: FOLLOW_DISABLED,
        isFetching, userId
    }
}

export const unfollow = userID => {
    return {
        type: UNFOLLOW,
        userID,
    }
}
export const setUsers = users => {
    return {
        type: SET_USERS,
        users,
    }
}
export const setIsFetching = isFetching => {
    return {
        type: TOGGLE_FETCHING,
        isFetching,
    }
}

export const setCurrentPage = currentPage => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
}

export const setTotalUsersCount = totalUsersCount => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount,
    }
}

export const getUsersTC = (currentPage, pageSize) => {
    return dispatch => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const changeUsersPageTC = (currentPage, pageSize, pageNumber) => {
    return dispatch => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(setIsFetching(true));
        usersAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setIsFetching(false));
            dispatch(setUsers(data.items));
        })
    }
}

export const unfollowTC = (userId) => {
    return dispatch => {
        dispatch(followDisabled(true, userId));
        followingAPI.deleteUnfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollow(userId))
            }
            dispatch(followDisabled(false, userId));
        })
    }
}

export const followTC = (userId) => {
    return dispatch => {
        dispatch(followDisabled(true, userId));
        followingAPI.postFollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(userId))
            }
            dispatch(followDisabled(false, userId));
        })
    }
}

export default usersReducer
