import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = (props) => {
    return <header className={s.header}>
            <img src={Logo}/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div className={s.flex_logout}>
                    <p className={s.p_login}>{props.login}</p>
                    <div className={s.logout}>
                        <button onClick={props.logout} className="btn btn-primary">Log out</button>
                    </div>
            </div>
                : <NavLink to={'/login'}><p className={s.p_log}>Login</p></NavLink>}
        </div>
    </header>
}

export default Header;