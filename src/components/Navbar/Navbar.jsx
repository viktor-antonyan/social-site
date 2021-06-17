import React from "react"
import style from "./navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li><NavLink to="/profile" activeClassName = {style.active}>Profile </NavLink></li>
                <li><NavLink to="/dialog" activeClassName = {style.active}>Dialog</NavLink></li>
                <li><NavLink to ="/friends" activeClassName = {style.active}>Friends</NavLink></li>
                <li><NavLink to ="/users" activeClassName = {style.active}>Users</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar
