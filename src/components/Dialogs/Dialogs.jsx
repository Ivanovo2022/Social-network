import React from "react"
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

// const DialogItem = (props) => {
//     return (
        
//         <div className={classes.dialog}>
//             <NavLink to={"/dialog/" + props.id} className={({ isActive }) => isActive ? "activeLink" : "notActive"}>{props.name}</NavLink>
//         </div>
//     )
// }

// const Message = (props) => {
//     return <div className={classes.message}>{props.message}</div>
// }

let dialogs = [
    { id: 1, void: "Inna"},
    { id: 2, void: "Olga" },
    { id: 3, void: "Vladimir" },
    { id: 4, void: "Anton" },
    { id: 5, void: "Vlad" },
    { id: 6, void: "Tatyana" },
]

let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is it going" },
    { id: 3, message: "How are you" },
    { id: 4, message: "How are you" },
    { id: 5, message: "How are you" },
    { id: 6, message: "How are you" },
]

let dialogsElem = dialogs.map(dialog => <DialogItem name={dialog.void} id={dialog.id} />)

let messageElem = messages.map(message => <Message message={message.message} />)

const Dialogs = (props) => {
    return (
    <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElem}
        </div> 
        <div className={classes.messages}>
            {messageElem}
        </div>
    </div>
    )
}

export default Dialogs;