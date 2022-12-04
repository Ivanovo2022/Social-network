import React from 'react';
import classes from "./Post.module.css"

const Post = (props) => {

  return (
  <div className={classes.item}>
    <img src='https://android-obzor.com/wp-content/uploads/2022/03/dv6b1_dnnhw.jpg' />
    {props.message}
    <div>
      <span>Like</span> {props.LikesCount}
    </div>
  </div>  
      
  )
};

export default Post;

