import React from 'react';
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return ( 
  <div >
      <div className={classes.content}>
        <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649278047_1-vsegda-pomnim-com-p-krasivii-plyazh-s-palmami-foto-1.jpg" />
      </div>
      <div className={classes.descriptionBlock}>
      ava + description
      </div>
  </div>
    )
}

export default ProfileInfo;