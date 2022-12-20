import React from "react"
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElem = props.dialogs.map(dialog => <DialogItem name={dialog.void} id={dialog.id} />)

    let messageElem = props.messages.map(message => <Message message={message.message} />)

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