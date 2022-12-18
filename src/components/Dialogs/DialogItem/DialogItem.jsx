import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css"

const DialogItem = (props) => {
    return (
        
        <div className={classes.dialog}>
            <NavLink to={"/dialog/" + props.id} className={({ isActive }) => isActive ? "activeLink" : "notActive"}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;