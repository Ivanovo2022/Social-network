import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./My Posts/MyPosts"

const Profile = () => {
    return <div >
      <div className={classes.content}>
        <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649278047_1-vsegda-pomnim-com-p-krasivii-plyazh-s-palmami-foto-1.jpg" />
    </div>
    <div>
      ava + description
    </div>
    <div>
      <MyPosts />
    </div>
  </div>
}

export default Profile;