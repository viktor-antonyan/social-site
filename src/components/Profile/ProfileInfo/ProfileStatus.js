import React, {useEffect, useState} from "react"
import style from "./status.module.css"

export const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(true)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const changeEditMode = () => {
        setEditMode(!editMode)
    }
    const onBlur = () => {
        changeEditMode()
        props.setProfileStatus(status)
    }
    const changeStatus = (event) => {
        setStatus(event.target.value)
    }

    return (
        <div className={style.statusDiv}>
            {editMode ?
                <span onClick={changeEditMode}><b>Status: </b>{status || <del>status</del>}</span>
                :
                <input autoFocus={true} onBlur={onBlur} onChange={changeStatus} value={status}/>
            }
        </div>
    )
}