import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css"

const DialogItem = (props) => {
    return (
        
        <div className={classes.dialog}>
            <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/supportmale-2-1024.png" alt="None" />
            
            <NavLink to={"/dialog/" + props.id} className={({ isActive }) => isActive ? "activeLink" : "notActive"}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;