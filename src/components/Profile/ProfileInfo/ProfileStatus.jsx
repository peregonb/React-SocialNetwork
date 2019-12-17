import React from "react";
import s from "../Profile.module.scss";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    enableEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    disableEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    returnStatus = () => {
        if (this.props.status === "") {
            return <span onClick={this.enableEditMode} style={{opacity: '.5'}}>Введите статус</span>
        } else if (this.props.status === null) {
            return <span style={{opacity: '.5'}}>Статус не заполнен</span>
        } else {
            return <span onClick={this.enableEditMode}>{this.props.status}</span>
        }
    }

   componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
   }

    render() {
        return (
            <div className={s.excerpt}>
                {!this.state.editMode ?
                    this.returnStatus()
                    :
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.disableEditMode} type="text"
                           value={this.state.status}/>
                }
            </div>
        )
    }
}

export default ProfileStatus;