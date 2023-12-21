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
// INFO: This could be 4, if you have a co.uk TLD or something like that.
if (parts.length >= 3) {
  subdomain = parts[0];
  // Remove the subdomain from the parts list
  // parts.splice(0, 1);
  // Set the location to the new url
}

// blog redirect - uncomment to route all traffic to blog
if (subdomain === '') {
  window.location = BLOG_URL;
}

function App(props) {
  return (
    <BrowserRouter>
        <Nav />
        <Routes>
          {/* <Route path='/login' element={<Login />}/> */}
            {subdomain === 'blog' &&
              <Route path='/*' element={<BlogRoutes />}/>
            }
            {subdomain === '' &&
              <Route path='/*' element={<DigRoutes />}/>
            }
            {/* need route for django admin? */}
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
