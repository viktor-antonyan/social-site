import React from "react"
import style from './user.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <div className={style.users}>
            <div className={style.imgDiv}>
                <NavLink to={`/profile/${props.id}`}><img src={props.img} alt={props.name}/></NavLink>
                <div className={style.status}>
                    <div>
                        <h3>{props.name}</h3>
                        {/*<h3>{'props.country'}</h3>*/}
                    </div>
                    <div>
                        <p>{props.status}</p>
                        {/*<p>{'props.city'}</p>*/}
                    </div>
                </div>
            </div>
            <div className={style.btnDiv}>
                <div>{props.followed ?
                    <button disabled={props.isDisabled.some(id => id === props.id)} onClick={() => {
                        props.unfollow(props.id)
                    }} style={{background: '#fff'}}>unSubscribe</button>
                    : <button disabled={props.isDisabled.some(id => id === props.id)} onClick={() => {
                        props.follow(props.id)
                    }} style={{background: '#c3c9f6'}}>subscribe</button>}
                </div>
            </div>
        </div>
    )
}
export default User
