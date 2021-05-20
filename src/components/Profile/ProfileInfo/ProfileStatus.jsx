import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activedEditMode = () => {
       this.setState({
        editMode: true
       });
       this.props.upDataStatus(this.state.status)
    }

    deActivedEditMode = () => {
        this.setState({
         editMode: false
        })
     }

     onStatusChenge = (e) => {
        this.setState({
           status: e.currentTarget.value
        }) 
     }

   render() {
    return (
        <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activedEditMode}>{this.props.status || "----"}</span>
                </div>
                : <div>
                    <input onChange={this.onStatusChenge} autoFocus={true} onBlur={this.deActivedEditMode} value={this.state.status} />
                </div>
            }
        </div>
     )
    }
}
  

export default ProfileStatus;