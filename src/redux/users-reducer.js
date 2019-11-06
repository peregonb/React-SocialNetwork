const FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
  SET_USERS = 'SET-USERS',
  SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
  SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
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
            return { ...u, followed: true }
          }
          return u
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      }

    default:
      return state
  }
}

export const followAC = userID => {
  return {
    type: FOLLOW,
    userID,
  }
}
export const unfollowAC = userID => {
  return {
    type: UNFOLLOW,
    userID,
  }
}
export const setUsersAC = users => {
  return {
    type: SET_USERS,
    users,
  }
}

export const setCurrentPageAC = currentPage => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  }
}

export const totalUsersCountAC = totalUsersCount => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
  }
}

export default usersReducer
