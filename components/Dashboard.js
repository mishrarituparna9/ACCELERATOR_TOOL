import { BrowserRouter,Route, Routes } from 'react-router-dom';
import React from 'react';
import Sidebar from './Sidebar.js';
import Admin from './Admin.js';
import Home from './Home.js';
import Tagger from './Tagger.js';
import Reviewer from './Reviewer.js';
      
const Dashboard=() => {
  return (
        <BrowserRouter>
         <Sidebar>
        <Routes>
        <Route path="/"element={<Home />}/>
        <Route path="/admin"element={<Admin />}/>                
        <Route path="/tagger"element={<Tagger />}/>
        <Route path="/reviewer"element={<Reviewer />}/>
      </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Dashboard