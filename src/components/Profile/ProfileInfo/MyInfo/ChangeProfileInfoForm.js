import React from "react"
import {Field, reduxForm} from "redux-form";
import style from "../../../Login/login.module.css";

const ChangeProfileInfoForm = ({handleSubmit, profile,error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <span>
                <button>Save</button>
            </span><br/>
            <span className={style.error}>{error}</span>
            <span>fullname:<Field name={'fullName'} placeholder="fullName" component={'input'}
                                  className={'form-control'}/></span><br/>
            <span><Field name={'lookingForAJob'} component={'input'} type={'checkbox'}
                         className={'form-control'}/></span><br/>
            <span>looking For A Job Description:<Field name={'lookingForAJobDescription'}
                                                       placeholder={'lookingForAJobDescription'} component={'textarea'}
                                                       className={'form-control'}/></span><br/>
            <span>About me:<Field name={'aboutMe'} component={'input'} placeholder={'aboutMe'}
                                  className={'form-control'}/></span><br/>
            {
                Object.keys(profile.contacts).map(key => {
                    return <div key={key}><span>{key}:</span> <Field
                        placeholder={key} className={'form-control contacts'} component={'input'}
                        name={'contacts.' + key}
                    /><br/></div>
                })
            }
        </form>
    )
}

export default reduxForm({
    form: 'profileInfo'
})(ChangeProfileInfoForm)