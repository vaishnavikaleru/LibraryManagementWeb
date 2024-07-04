import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import Front from './frontpage/front';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
       <Routes>
          <Route  path="/" element={<Front/>}/>
       </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);
