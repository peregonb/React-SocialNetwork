const FOLLOW = "FOLLOW",
  UNFOLLOW = "UNFOLLOW",
  SET_USERS = "SET-USERS";

let initialState = {
  users: [
    
  ],
  newPostText: ""
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        })
      };

    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      }; 

    default:
      return state;
  }
};

export const followAC = userID => {
  return {
    type: FOLLOW,
    userID
  };
};
export const unfollowAC = userID => {
  return {
    type: UNFOLLOW,
    userID
  };
};
export const setUsersAC = users => {
  return {
    type: SET_USERS,
    users
  };
};

export default usersReducer;
