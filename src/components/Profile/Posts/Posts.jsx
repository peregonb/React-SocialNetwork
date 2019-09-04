import React from "react";
import { addPostActionCreator, updatePostTextActionCreator } from "../../../redux/profile-reducer";
import Post from "./Post/Post";
import s from "./Posts.module.scss";


const Posts = props => {
  let postElements = props.postData.map(p => (
    <Post id={p.id} message={p.message} name={p.name} like={p.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }; 

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updatePostTextActionCreator(text));
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        className={`${s.block} ${s.textarea}`}
        placeholder="Что у вас нового?"
        value={props.newPostText}
      />
      <button onClick={addPost}>Отправить</button>
      {postElements}
    </div>
  );
};

export default Posts;
