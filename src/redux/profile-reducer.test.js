import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
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
    };

it('length of post should be incremented', () => {
    // test data
    let action = addPostActionCreator("post text");
    // action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.postData.length).toBe(4);
});

it('text of post should be correct', () => {
    // test data
    let action = addPostActionCreator("post text");
    // action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.postData[0].message).toBe("post text");
});

 it('after deleting length of messages should be decremented', () => {
    // test data
    let action = deletePost(2);
    // action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.postData.length).toBe(2);
});

 it('after deleting length shouldn` t be decrement if id is incorrect  ', () => {
    // test data
    let action = deletePost(200);
    // action
    let newState = profileReducer(state, action);

    //expectation
    expect(newState.postData.length).toBe(3);
});