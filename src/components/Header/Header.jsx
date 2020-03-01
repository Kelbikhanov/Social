import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = (props) => {
    return <header className={s.header}>

        <a href={"/Profile"}><img src={Logo}/></a>

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div className={s.flex_logout}>
                    <div >
                        <p className={s.p_logout}>{props.login}</p>
                    </div>
                   <div className={s.header_logout}>
                       <button className="btn btn-primary" onClick={props.logout}>Log out</button>
                   </div>
                  </div>
                :  <NavLink to={'/login'}><p className={s.log}>Login</p></NavLink> }
        </div>
    </header>
}

export default Header;