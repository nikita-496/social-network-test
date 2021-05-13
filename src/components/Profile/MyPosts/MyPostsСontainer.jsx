import React from 'react';
import { addPostActionCreater, updateNewPostTextActionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        //newPostText: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch( addPostActionCreater() )
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text)
            dispatch(action);
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
export default MyPostsContainer;