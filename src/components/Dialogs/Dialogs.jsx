import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"

const DialogItem = (props) => {
    return (
        
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={"/dialog/" + props.id} >{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={classes.message}>{props.message}</div>
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Inna" id ="1" />
                <DialogItem name="Olga" id="2" />
                <DialogItem name="Vladimir" id="3" />
                <DialogItem name="Anton" id="4" />
                <DialogItem name="Vlad" id="5" />
                <DialogItem name="Tatyana" id="6" />
            </div> 
            <div className={classes.messages}>
                <Message message="Hi" />
                <Message message="How is it going" />
                <Message message="How are you" />
            </div>
        </div>
    )
}

export default Dialogs;