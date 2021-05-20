import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsСontainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} upDataStatus={props.upDataStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;