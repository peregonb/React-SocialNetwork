import { rerenderEntireTree } from "../render";

let state = {
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
    ]
  },
  dialogsPage: {
    messageData: [
      { id: 0, message: "Привет", extraClass: "false" },
      { id: 1, message: "Как там твой курс по реакту?", extraClass: "true" },
      { id: 2, message: "Все отлично, все клубнично", extraClass: "false" }
    ],
    dialogsData: [
      {
        id: 0,
        imageUrl: "https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg"
      },
      {
        id: 1,
        imageUrl:
          "https://png.pngtree.com/element_origin_min_pic/16/08/29/2057c42950371fe.jpg"
      },
      {
        id: 2,
        imageUrl: "https://avatarko.ru/img/kartinka/14/igrushka_mysh_13852.jpg"
      }
    ]
  }
};


export let addPost = (postMessage) => {
    let newPost = {
        id : 3,
        message: postMessage,
        name : "Богдан Перегон",
        likeCount : 0
    }
    state.profilePage.postData.push(newPost);
    rerenderEntireTree(state);
}

export default state;
