import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {

  return (
  <div className={classes.item}>
    My posts
    <div>
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div>
      <Post message="Hi, haw are you" LikesCount="0" />
        <Post message="It`s my first post" LikesCount="23" />
    </div>
  </div>);
};

export default MyPosts;
