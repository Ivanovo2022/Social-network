import React from 'react';
import Post from "./Post/Post"
import classes from "./MyPosts.module.css"

const MyPosts = () => {

  return (
  <div >
    <div className={classes.post_block}>
        <h3>
            My MyPosts
        </h3>
    </div>
    <div>
      <textarea></textarea>
    </div>
    <div>
      <button>Add post</button>
    </div>
    <div className={classes.posts}>
      <Post message="Hi, haw are you" LikesCount="0" />
      <Post message="It`s my first post" LikesCount="23" />
    </div>
  </div>);
};

export default MyPosts;
