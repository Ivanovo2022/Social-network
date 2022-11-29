import React from 'react';
import classes from "./Post.module.css"

const Post = () => {
  return (
  <div className={classes.item}>
    <img src='https://android-obzor.com/wp-content/uploads/2022/03/dv6b1_dnnhw.jpg' />
    post 1
    <div>
      <span>Like</span>
    </div>
  </div>  
      
  )
};

export default Post;

