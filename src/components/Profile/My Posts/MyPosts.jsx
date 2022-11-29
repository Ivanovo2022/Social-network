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
      <Post />
    </div>
  </div>);
};

export default MyPosts;

/*const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>);
}

export default App;*/