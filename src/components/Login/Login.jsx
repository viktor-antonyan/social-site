import React from "react"
import style from "./login.module.css"
import LoginForm from "./LoginForm/LoginForm";

export const Login = (props) => {
    return (
        <div className={style.login}>
            <div className={style.loginTriangle} />
            <h2 className={style.loginHeader}>Log in</h2>

            <LoginForm onSubmit = {props.onSubmit} captcha={props.captcha}/>

        </div>
    )
}