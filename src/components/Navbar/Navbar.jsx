import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from "./Navbar.module.css"
import Friend from './FriendsItems/FriendItem';

const Navbar = (props) => {

    let friendsElem = props.state.friends.map(friend =>
        <Friend name={friend.friendName} id={friend.id} />)

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
            <div className={classes.settings}>
                <a>Settings</a>
            </div>
            <h2>Friends</h2>
            <div className={classes.friend}>
                {friendsElem}
            </div>
        
        </nav>
    )
}

export default Navbar;