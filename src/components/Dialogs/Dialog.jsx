import React from "react"
import style from "./dialog.module.css"
import User from "./User/User";
import Message from "./Message/Message";
import DialogForm from "./DialogForm";

const Dialog = (props) => {
    const userItems = props.userData.map((el, i) => <User id={el.id} name={el.name} key={i}/>)
    const allUsersMessages = props.usersMessages.map((el, i) => <Message id={el.id} text={el.text} key={i}/>)

    const addMessage = (formData) => {
        props.addMessage(formData.newMessage)
    }
    return (
        <div className={style.content}>
            <div className={style.dialogs}>
                <div className={style.items}>
                    {userItems}
                </div>
                <div className={style.messages}>
                    {allUsersMessages}
                </div>
            </div>
            <DialogForm {...props} onSubmit={addMessage}/>
        </div>
    )
}
export default Dialog

