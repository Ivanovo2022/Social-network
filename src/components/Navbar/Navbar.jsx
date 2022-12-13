import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css"

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className={({isActive}) => isActive ? "activeLink" : "notActive" }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/' className={({ isActive }) => isActive ? "activeLink" : "notActive"}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <a>News</a>
            </div>
            <div className={classes.item}>
                <a>Music</a>
            </div>
            <div className={classes.item}>
                <a>Settings</a>
            </div>
    </nav>
    )
}

export default Navbar;