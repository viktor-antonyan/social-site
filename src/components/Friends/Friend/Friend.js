import style from "./friend.module.css"

const Friend = (props) =>{
    return (
        <div className={style.friend}>
            <img src = {props.img} alt="img"/>
            <h3>{props.name}</h3>
        </div>
    )
}
export default Friend