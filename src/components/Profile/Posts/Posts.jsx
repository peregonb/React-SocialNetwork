import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.scss";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsFields/formsFields";

const maxLengthValidator = maxLengthCreator(30);
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
            <Field component={Textarea}
                   className={`${s.block} ${s.textarea}`}
                   placeholder="Что у вас нового?"
                   name="PostsFormTextarea"
                   validate={[requiredField, maxLengthValidator]}
            />
        </form>
    )
}

const PostsFormRedux = reduxForm({form: "PostsForm"})(PostsForm);

export default Posts;
