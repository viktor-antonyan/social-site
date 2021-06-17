import React from "react"
import style from "../login.module.css";
import {Field, reduxForm} from "redux-form";
import {FormControls} from "../../../utils/FormControls/FormControls";
import {required} from "../../../utils/formValidate/formValidate";

const TextAreaField = FormControls("input");

const LoginForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit} className={style.loginContainer}>
            <span><Field name={"email"} component={TextAreaField}
                        validate={[required]}
                        placeholder="Email"/></span>
            <span><Field name={"password"} component={TextAreaField} type={"password"}
                        validate={[required]}
                        placeholder="Password"/></span>
            <span className={style.checkbox}><Field name={"rememberMe"} component={"input"} type={"checkbox"}/>remember
                me
            </span>

            <span className={style.error}>{props.error}</span>

            {props.captcha && <>
                <img src={`${props.captcha}`} alt="captcha" className={style.captcha}/>
                <span><Field name={"captcha"} component={TextAreaField}
                             validate={[required]}
                             placeholder="captcha"/></span>
                </>}

            <span>
                <button type="submit">Log in</button>
            </span>
        </form>
    )
}
export default reduxForm({
    form: 'login'
})(LoginForm)
