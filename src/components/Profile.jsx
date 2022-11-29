import React from 'react';
import classes from "./Profile.module.css"

const Profile = () => {
    return <div className={classes.content}>
    <div >
        <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1649278047_1-vsegda-pomnim-com-p-krasivii-plyazh-s-palmami-foto-1.jpg" />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;