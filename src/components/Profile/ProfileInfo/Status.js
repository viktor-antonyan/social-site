import React, {Component} from "react"
import style from "./status.module.css"

export class Status extends Component {
    // eslint-disable-next-line no-undef
    state = {
        editMode: true,
        status: this.props.status
    }
    // eslint-disable-next-line no-undef
    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    // eslint-disable-next-line no-undef
    changeStatus = (event) => {
        this.setState({
            status: event.target.value
        })
    }
    // eslint-disable-next-line no-undef
    onBlur = () => {
        this.changeEditMode()
        this.props.setProfileStatus(this.state.status)
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={style.statusDiv}>
                {this.state.editMode ?
                    <span onClick={this.changeEditMode}>{this.props.status}</span>
                    :
                    <input autoFocus={true} onBlur={this.onBlur} type="text" onChange={this.changeStatus}
                           value={this.state.status}/>
                }
            </div>
        )
    }
}