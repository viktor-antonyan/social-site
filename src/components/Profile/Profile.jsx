import React from "react"
import style from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <article className={style.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </article>
    )
}
export default Profile
