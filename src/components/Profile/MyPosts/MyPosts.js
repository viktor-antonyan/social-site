import React from "react"
import Post from "./Posts/Post";
import style from "./myPost.module.css";
import ProfileForm from "./ProfileForm";

const MyPosts = (props) =>{
    const userPosts = props.posts.map((el,i)=> <Post post = {el.post} img = {el.img} key = {i}/>)
    return (
        <div>
            <h1>my post</h1>
            <div className={style.newPost}>
                <ProfileForm {...props} onSubmit={props.addNewPost}/>
            </div>
            {userPosts}
        </div>
    )
}
export default MyPosts
