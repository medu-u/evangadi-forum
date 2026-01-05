import React from 'react'
import { Route, Routes } from "react-router-dom";

import About from "../../Pages/About/About";

function Layout() {
  return (
    <Routes>
      
       
        <Route path="/about" element={<About />} />
    
    </Routes>
  );
}

export default Layout