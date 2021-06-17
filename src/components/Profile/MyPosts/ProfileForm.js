import style from "./myPost.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/formValidate/formValidate";
import {FormControls} from "../../../utils/FormControls/FormControls";
import React from "react";

const maxPostLength = maxLength(15)
const TextAreaField = FormControls("textarea");

const ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="newPost" component={TextAreaField} placeholder="new post"
                   validate={[required, maxPostLength]}
            />
            <button className={style.btn}>Add post</button>
        </form>
    )
}
export default reduxForm({
    form: 'profile'
})(ProfileForm)
