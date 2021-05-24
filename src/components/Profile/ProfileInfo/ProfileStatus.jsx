import React from 'react';



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
        this.props.upDataStatus(this.status.status)
     }

     onStatusChenge = (e) => {
        this.setState({
           status: e.currentTarget.value
        }) 
     }

     componentDidUpdate(prevProps, prevState) {
         
         if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
         }
        
         console.log("componentDidUpdate")
     }
   render() {
    console.log("render")
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