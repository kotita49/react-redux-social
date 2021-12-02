import React from 'react';
import { NavLink } from 'react-router-dom';
import n from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return <nav className={n.nav}>
        <div className={n.item}>
            <NavLink to='/profile' >Profile</NavLink>
        </div>
        <div className={n.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={n.item}>
            <NavLink activeclassname={n.activeLink} to='/news'>News</NavLink>
        </div>
        <div className={n.item}>
            <NavLink activeclassname={n.activeLink} to='/music'>Music</NavLink>
        </div>
        <div className={n.item}>
            <NavLink activeclassname={n.activeLink} to='/settings'>Settings</NavLink>
        </div>
        <div className={n.item}>
            <NavLink activeclassname={n.activeLink} to='/friends'>Friends</NavLink>
        </div>
    </nav>
}

export default Navbar;