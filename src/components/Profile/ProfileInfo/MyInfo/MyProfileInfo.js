import React from "react"
import style from "./../status.module.css"
import {useState} from "react";
import ChangeProfileInfoForm from "./ChangeProfileInfoForm";

export const MyProfileInfo = ({profile, profileId, saveProfile}) => {
    const [showContacts, setShowContacts] = useState(false)
    const [editMode, setEditMode] = useState(false)

    const changeEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(()=>{
            setEditMode(false)
        })
    }

    return (
        <div>
            {!showContacts ?
                <button onClick={() => setShowContacts(true)} className={style.toggleButton}>Show more</button> :
                <div className={style.infoBlog}>
                    <hr/>
                    {editMode && !profileId ?
                        <ChangeProfileInfoForm onSubmit={onSubmit} profile={profile} initialValues={profile}/> :
                        <>
                            {!profileId &&
                            <button className={style.edit} onClick={changeEditMode}>Edit</button>
                            }
                            <div><b>User name: </b> {profile.fullName}</div>
                            <div><b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}</div>
                            {profile.lookingForAJob && <p><b>My skills: </b> {profile.lookingForAJobDescription}</p>}
                            <div><b>About me: </b> {profile.aboutMe}</div>
                            <div><b>Contacts: </b>{Object.keys(profile.contacts).map(key => <div
                                className={style.contacts}
                                key={key}>
                                <b>{key}: </b><a href={profile.contacts[key]}>{profile.contacts[key]}</a></div>)}</div>
                        </>
                    }
                </div>
            }
        </div>
    )
}