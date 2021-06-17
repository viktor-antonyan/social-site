import React from "react"
import style from "./post.module.css"

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src= {props.img} alt="img"/>
            <div>{props.post}</div>
        </div>
    )
}
export default Post
