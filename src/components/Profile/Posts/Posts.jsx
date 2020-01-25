import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.scss";
import {Field, reduxForm} from "redux-form";

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
    let onFormSubmit = (value) => {
      props.addPost(value.PostsFormTextarea)
    }

    return (
        <div>
            <PostsFormRedux onSubmit={onFormSubmit}/>
            {postElements}
        </div>
    );
};

const PostsForm = props => {
    return (
        <form className={s.textareaWrapper} onSubmit={props.handleSubmit}>
            <Field component={"textarea"}
                   className={`${s.block} ${s.textarea}`}
                   placeholder="Что у вас нового?"
                   name="PostsFormTextarea"/>
            <div className={s.buttonWrapper}>
                <button className={s.buttonSend + ` icon-back-left-arrow-curve-symbol`}/>
            </div>
        </form>
    )
}

const PostsFormRedux = reduxForm({form : "PostsForm"}) (PostsForm);

export default Posts;
