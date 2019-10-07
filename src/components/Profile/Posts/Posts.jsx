import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.scss";

const Posts = props => {
  let postElements = props.postData.map(p => (
    <Post
      id={p.id}
      message={p.message}
      name={p.name}
      like={p.likeCount}
      key={p.id}
    />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div>
      <div className={s.textareaWrapper}>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          className={`${s.block} ${s.textarea}`}
          placeholder="Что у вас нового?"
          value={props.newPostText}
        />
        <div className={s.buttonWrapper}>
          <button className={s.buttonSend + ` icon-back-left-arrow-curve-symbol`} onClick={onAddPost}>
            
          </button>
        </div>
      </div>

      {postElements}
    </div>
  );
};

export default Posts;
