import React, {useEffect} from "react";
import User from "./User/User";
import userImg from "./../../assets/img/user.png"
import {Pagination} from "./Pagination/Pagination";

const Users = (props) => {
    const users = props.users.map((u, i) => <User img={u.photos.small || userImg} name={u.name}
                                                  followed={u.followed}
                                                  id={u.id}
                                                  status={u.status}
                                                  key={i}
        /*city={u.location.city} country={u.location.country}*/
        // toggleSubscribe={props.toggleSubscribe}
        // isDisabled={props.isDisabled}
        // toggleDisabled={props.toggleDisabled}
                                                  {...props}
    />)
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            props.scroll(props.currentPage + 1)
        }
        // else if (e.target.documentElement.scrollTop === 0 && props.currentPage > 1) {
        //     props.scroll(props.currentPage - 1)
        // }
    }

    return (
        <div>
            {users}
            {/*<Pagination allUsersCount={props.allUsersCount} pageSize={props.pageSize} btnClick={props.btnClick}*/}
            {/*            currentPage={props.currentPage}/>*/}
        </div>
    )
}


export default Users
