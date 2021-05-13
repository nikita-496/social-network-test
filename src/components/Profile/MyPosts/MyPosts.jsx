import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        debugger
        props.dispatch( addPostActionCreater() );
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreater(text)
        props.dispatch(action);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText} />
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;