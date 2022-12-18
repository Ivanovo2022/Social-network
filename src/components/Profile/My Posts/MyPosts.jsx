import React from 'react';
import Post from "./Post/Post"
import classes from "./MyPosts.module.css"

const MyPosts = () => {

  let postData = [
    { id: 1, message: "Hi, haw are you", LikesCount : 12 },
    { id: 2, message: "It`s my first post", LikesCount: 25 },
]

  let postsElem = postData.map(post => <Post message={post.message} LikesCount={post.LikesCount} />)

  return (
  <div >
    <div className={classes.post_block}>
        <h3>
            My MyPosts
        </h3>
    </div>
    <div className={classes.textarea}>
      <textarea></textarea>
    </div>
    <div className={classes.add_post}>
      <button>Add post</button>
    </div>
    <div className={classes.posts}>
      {postsElem}
    </div>
  </div>);
};

export default MyPosts;
