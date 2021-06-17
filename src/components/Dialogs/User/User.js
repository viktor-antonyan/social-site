import React from "react"
import style from "../dialog.module.css";
import {NavLink} from "react-router-dom";

const User = (props) =>{
    return (
        <div className={style.user}>
            <NavLink to={`/dialog/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}
export default User