import React, { useState } from 'react';
import s from './ProfileInfo.module.css';


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivedEditMode = () => {
        setEditMode(false)
        props.updataStatus(status)
    }

    const onStatusChenge = (e) => {
         setStatus(e.currentTarget.value)
     }
    
    return (
        <div>
            { !editMode  
            ?   <div>
                    <span onDoubleClick = {activateMode}>{props.status || "React OneLove"}</span>
                </div> 
            :   <div>
                    <input onChange={onStatusChenge} autoFocus={true}  onBlur={deActivedEditMode} value={status}/>
                </div>
            }
            
        </div>
    )
}

  

export default ProfileStatusWithHook;