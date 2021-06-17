import React from "react"
import style from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.img} src="https://cdn4.iconfinder.com/data/icons/social-media-2069/130/_Vine-512.png"
                 alt="logo"/>
            <div className={style.link}>
                {props.isAuth ?
                    <div>
                        {props.login}
                        <button onClick={props.logout} className={style.logout}>Logout</button>
                    </div> :
                    <NavLink to={"/login"} className={style.login}>Login</NavLink>}
            </div>
        </header>
    )
}
export default Header