import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>About Me: {props.profile.aboutMe} </div>
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