import style from "./friendsmodule.css"
import Friend from "./Friend/Friend";

const Friends = (props) => {
    const friend = props.friends.map((el,i) => <Friend img = {el.img} name = {el.name} key = {i}/>)

    return (
        <div className={style.content}>
            {friend}
        </div>
    )
}
export default Friends
