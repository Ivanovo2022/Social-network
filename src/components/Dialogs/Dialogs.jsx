import React from "react"
import classes from "./Dialogs.module.css"
import class1 from "./DialogItem/DialogsItem.module.css"
import DialogItem from "./DialogItem/DialogItem";
import classes1 from "./Message/Message.module.css"
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElem = props.state.dialogs.map(dialog => 
    < DialogItem name={dialog.void} id={dialog.id} />)

    let messageElem = props.state.messages.map(message => <Message message={message.message} />)
    
    let newMessageElem = React.createRef ()

    let addMessage = () => {
        let text = newMessageElem.current.value
        alert (text)
    }

    return (
        <div className={classes.dialogs}>
            <div className={class1.dialogItem}>
                {dialogsElem}
            </div>
            <div className={classes1.messages}>
                {messageElem}
            </div>
            <div className={classes1.right}>
                {messageElem}
            </div> 
            <div>
                <textarea ref = {newMessageElem}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;