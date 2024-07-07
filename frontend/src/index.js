import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Front from './frontpage/front';
import Login from './login/login';
import SignUp from './signuppage/signup.js';
import Home from './homepage/homepage.js';
import Collection from './AddCollectionPage/addcollectionpage.js';
import Item from './AddItemPage/additempage.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route  path="/" element={<Front/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/collection" element={<Collection/>} />
          <Route path="/additems" element={<Item/>} />
       </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
