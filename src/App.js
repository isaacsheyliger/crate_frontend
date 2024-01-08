import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav.js'
import Footer from './components/footer.js';
import DigRoutes from './components/digger/routes.js';
import BlogRoutes from './components/blog/routes.js';
//import './static/css';

function App(props) {
  return (
    <HashRouter>
        <Nav />
        <Routes>
              <Route path='#/blog' element={<BlogRoutes />}/>
              {/* <Route path='#/dig' element={<DigRoutes />}/> */}
        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;
