import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div>
      <textarea className={`${s.block} ${s.textarea}`} placeholder="Что у вас нового?"/>
      <Post message="Всем привет я поэт" name="Богдан Перегон" like="4"/>
      <Post message="Твоя мама - толстуха" name="Богдан Перегон" like="7"/>
    </div>
  );
};

export default Posts;
