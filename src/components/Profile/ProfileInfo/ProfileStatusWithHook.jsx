import React, { useEffect, useState } from 'react';

const ProfileStatusWithHook = (props) => {
    //отрисовка компоненты
    debugger
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    //синхронизация компоненты с новыми props
    useEffect( () => {
        debugger
        setStatus(props.status)
    }, [props.status] )

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChenge = (e) => {
         setStatus(e.currentTarget.value)
     }
    
    return (
        <div>
            { !editMode  
            &&   <div>
                    <span onDoubleClick = {activateMode}>{props.status || "------"}</span>
                </div> 
            } 
            { editMode &&
                <div>
                    <input onChange={onStatusChenge} autoFocus={true}  onBlur={deActivedEditMode} value={status}/>
                </div>
            }
        </div>
    )
}

  

export default ProfileStatusWithHook;