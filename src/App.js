import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav.js'
import Footer from './components/footer.js';
import DigRoutes from './components/digger/routes.js';
import BlogRoutes from './components/blog/routes.js';
import { config } from './const/constants.js';
//import './static/css';

const BLOG_URL = config.blog_url
let host = window.location.host;
// let protocol = window.location.protocol;
let parts = host.split(".");
let subdomain = "";
// If we get more than 3 parts, then we have a subdomain

function App(props) {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path='/login' element={<Login />}/> */}
              <Route path='/blog' element={<BlogRoutes />}/>
              <Route path='/dig' element={<DigRoutes />}/>
            {/* need route for django admin? */}
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
