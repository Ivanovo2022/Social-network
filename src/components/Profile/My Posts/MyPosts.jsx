import React from 'react';
import Post from "./Post/Post"
import classes from "./MyPosts.module.css"

const MyPosts = (props) => {


  let postsElem = 
  props.postData.map(post => <Post message={post.message} LikesCount={post.LikesCount} />);

  let addPost = () => {
    let text = newPostElem.current.value;
    alert (text);
  }

  let newPostElem = React.createRef ()

  return (
  <div >
    <div className={classes.post_block}>
        <h3>
            My MyPosts
        </h3>
    </div>
    <div className={classes.textarea}>
      <textarea ref={newPostElem}></textarea>
    </div>
    <div className={classes.add_post}>
      <button onClick={addPost}>Add post</button>
    </div>
    <div className={classes.posts}>
      {postsElem}
    </div>
  </div>);
};

export default MyPosts;
