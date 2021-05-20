import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    activedEditMode = () => {
       this.setState({
        editMode: true
       })
    }

    deActivedEditMode = () => {
        this.setState({
         editMode: false
        })
     }

   render() {
    return (
        <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activedEditMode}>{this.props.status}</span>
                </div>
                : <div>
                    <input autoFocus={true} onBlur={this.deActivedEditMode} value={this.props.status} />
                </div>
            }
        </div>
     )
    }
}
  

export default ProfileStatus;