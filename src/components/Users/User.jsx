import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.user}>
            <div className={styles.flex_user}>
                <div className={styles.flex1}>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button className={styles.unfollow} disabled={followingInProgress
                                .some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>
                                Unfollow</button>
                            :
                            <button className={styles.follow} disabled={followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        follow(user.id)
                                    }}>
                                Follow</button>}

                    </div>
                </span>
                </div>
                <div className={styles.flex2}>
                <div>
                    <span>
                        <div className={styles.name}>{user.name}</div>
                        <div className={styles.status}>{user.status}</div>
                    </span>
                    <span>
                        <div className={styles.location}>{"user.location.country"}</div>
                        <div className={styles.location}>{"user.location.city"}</div>
                    </span>
                </div>
                </div>
            </div>
            <div className={styles.hr_div}>
                <hr/>
            </div>
        </div>
    )
}

export default User;