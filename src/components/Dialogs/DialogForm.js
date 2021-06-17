import React from "react"
import style from "./dialog.module.css";
import {Field, reduxForm} from "redux-form";
import {FormControls} from "../../utils/FormControls/FormControls";
import {maxLength, required} from "../../utils/formValidate/formValidate";

const maxMessageLength = maxLength(100)
const TextAreaField = FormControls("textarea");

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.textareaDiv}>
            <Field component={TextAreaField}
                   validate={[required,maxMessageLength]}
                   name="newMessage" placeholder='message...'/>
            <button className={style.btn}>send message</button>
        </form>
    )
}

export default reduxForm({
    form: 'dialogForm'
})(DialogForm)