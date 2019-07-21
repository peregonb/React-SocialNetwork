import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div>
      <div className={s.block}>
        <textarea></textarea>
        <button>Поделиться</button>
      </div>
      <Post message="Всем привет я поэт" />
      <Post message="Твоя мама - толстуха"/>
    </div>
  );
};

export default Posts;
