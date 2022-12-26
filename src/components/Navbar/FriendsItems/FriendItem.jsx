import React from "react"

import classes from "./Friends.module.css"

const Friend = (props) => {
    return (
        
        <div className={classes.avatar}>
            <img src="https://cdn1.ozone.ru/s3/multimedia-3/6033662595.jpg" alt="None" />
            <div>{props.name}</div>
        </div>
    )
}

export default Friend;