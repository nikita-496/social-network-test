import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
             {/*
            <div>
               <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div> 
             */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <img src='../../assets/images/my_avatar.png'/>
                <ProfileStatus status={props.status} upDataStatus={props.upDataStatus}/>
                <div>About Me: I'm Nikita{props.profile.aboutMe} </div>
                <div>contacts: {props.profile.contacts.facebook} </div>
                <div>contacts: {props.profile.contacts.vk} </div>
                <div>contacts: {props.profile.contacts.twitter} </div>
                <div>contacts: {props.profile.contacts.instagram} </div>
                <div>contacts: {props.profile.contacts.youtube} </div>
                <div>contacts: {props.profile.contacts.github} </div>

            </div>
        </div>
    )
}

export default ProfileInfo;