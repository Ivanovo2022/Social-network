import React from 'react';
import MyPosts from "./My Posts/MyPosts"
import ProfileInfo from './My Posts/ProfileInfo/ProfileInfo';

const Profile = () => {
    return ( 
    <div>
      <div>
        <ProfileInfo />
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
    )
}

export default Profile;