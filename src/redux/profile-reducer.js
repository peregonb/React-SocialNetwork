const ADD_POST = "ADD-POST",
  UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    {
      id: 0,
      message: "Всем привет я поэт",
      name: "Богдан Перегон",
      likeCount: 4
    },
    {
      id: 1,
      message: "Твоя мама - толстуха",
      name: "Богдан Перегон",
      likeCount: 6
    },
    {
      id: 2,
      message: "Твой дядя самых честных правил",
      name: "Богдан Перегон",
      likeCount: 8
    }
  ],
  newPostText: ""
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

    default:
      return state;
  }
};

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

export default profileReducer;
