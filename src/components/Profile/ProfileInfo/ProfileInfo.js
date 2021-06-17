import React from "react"
import style from "../profile.module.css";
import Loader from "../../Loader/Loader";
import userImg from "./../../../assets/img/user.png"
import {ProfileStatus} from "./ProfileStatus";
import {useState} from "react";
import {MyProfileInfo} from "./MyInfo/MyProfileInfo";

const ProfileInfo = (props) => {
    const [showInput, setSowInput] = useState(true)

    if (!props.profile) {
        return <Loader/>
    }
    const changeInputFile = (event) => {
        if (event.target.files.length) {
            props.changeMyProfilePhoto(event.target.files[0])
            setSowInput(false)
        }
    }
    const clickProfilePhoto = () => {
        setSowInput(!showInput)
    }

    return (
        <div className={style.profileDiv}>
            <div className={style.imgDiv}>
                <div>
                    {!props.profileId && showInput &&
                    <input type={"file"} onChange={changeInputFile} className={style.profileInput}/>}
                </div>
                <div>
                    {
                        <img src={props.profile.photos.large || userImg} alt={new Date()} onClick={clickProfilePhoto}/>
                    }
                    <ProfileStatus {...props}/>
                </div>
            </div>
            <MyProfileInfo profile={props.profile} profileId={props.profileId} saveProfile={props.saveProfile}/>
        </div>
    )
}
export default ProfileInfo
