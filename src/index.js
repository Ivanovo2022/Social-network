import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './components/redux/state';

// let postData = [
//   { id: 1, message: "Hi, haw are you", LikesCount: 12 },
//   { id: 2, message: "It`s my first post", LikesCount: 25 },
// ];

// let messages = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "How is it going" },
//   { id: 3, message: "How are you" },
//   { id: 4, message: "How are you" },
//   { id: 5, message: "How are you" },
//   { id: 6, message: "How are you" },
// ]

// let dialogs = [
//   { id: 1, void: "Inna" },
//   { id: 2, void: "Olga" },
//   { id: 3, void: "Vladimir" },
//   { id: 4, void: "Anton" },
//   { id: 5, void: "Vlad" },
//   { id: 6, void: "Tatyana" },
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state = {state} />
  </React.StrictMode>
);

reportWebVitals();
