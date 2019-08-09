import React from "react";
import s from "./Posts.module.scss";
import Post from "./Post/Post";




const Posts = (props) => {

  let postElements = props.postData.map(p => <Post id={p.id} message={p.message} name={p.name} like={p.likeCount}/>)

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  }



  return (
    <div>
      <textarea ref={newPostElement} className={`${s.block} ${s.textarea}`} placeholder="Что у вас нового?"/>
      <button onClick={addPost}>Отправить</button>
      {postElements}
    </div>
  );
};

export default Posts;
