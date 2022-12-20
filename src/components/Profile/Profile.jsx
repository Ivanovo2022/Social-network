import React from 'react';
import MyPosts from "./My Posts/MyPosts"
import ProfileInfo from './My Posts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return ( 
    <div>
      <div>
        <ProfileInfo />
      </div>
      <div>
          <MyPosts postData = {props.postData}/>
      </div>
    </div>
    )
};


export default Profile;