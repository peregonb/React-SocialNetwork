import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let store = {
    _state: {
        profilePage: {
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
            newPostText: "somevalue"
        },
        dialogsPage: {
            messageData: [
                {id: 0, message: "Привет", extraClass: "false"},
                {id: 1, message: "Как там твой курс по реакту?", extraClass: "true"},
                {id: 2, message: "Все отлично, все клубнично", extraClass: "false"}
            ],
            dialogsData: [
                {
                    id: 0,
                    imageUrl: "https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"
                },
                {
                    id: 1,
                    imageUrl:
                        "data:image/jpeg;base64,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"
                },
                {
                    id: 2,
                    imageUrl:
                        "https://avatarko.ru/img/kartinka/14/igrushka_mysh_13852.jpg"
                }
            ],
            newMessageText: "message!!!"
        }
    },
    _callSubscriber(some) {
        console.log(some);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};


export default store;
