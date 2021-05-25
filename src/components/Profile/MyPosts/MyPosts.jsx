import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utilits/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { Component } from 'react';

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props) => {
    console.log("RENDER")
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText); 
       
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
})


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea } placeholder="Введите текст поста" validate={[required, maxLength10]}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
    )
} 
AddNewPostForm = reduxForm({form:"ProfileAddNewPosrForm"})(AddNewPostForm)
export default MyPosts;
