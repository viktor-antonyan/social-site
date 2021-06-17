import React from "react"
import style from "./formControls.module.css"


export const FormControls = (TagName) => (props) => {
   const { touched, error } = props.meta
    return (
        <div className={style.formValidate}>
        <TagName {...props} {...props.input} className={error && touched ? style.error : ''}/>
            {error && touched && <span>{error}</span>}
        </div>
    )
}