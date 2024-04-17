import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/nav.js'
import Footer from './components/footer.js';
import Home from "./components/blog/home.js"
import ArchiveList from './components/blog/archivelist.js';
import Article from './components/blog/article.js';
import Login from './components/digger/login.js';
import Dig from './components/digger/dig.js';
import Error from './components/error.js';
//import './static/css';

// Route to blog automatically
//let url = window.location.href;

//if (url.indexOf('#') === -1) {
//  url += '#/'
//}

//window.location.href = url;

function App(props) {
  return (
    <BrowserRouter basename=''>
        <Nav />
        <Routes>
              {/* blog routes */}
              <Route exact path='/' element={<Home />} />
              <Route exact path='/archive' element={<ArchiveList />} />
              <Route exact path='/articles/:id/:title' element={<Article />} />
              <Route path='/*' element={<Error code={404} />}/>
              {/* dig routes */}
              <Route exact path='/dig/' element={<Navigate to='/dig/login' />} />
              <Route exact path='/dig/login/' element={<Login />} />
              <Route exact path='/dig/home/' element={<Dig />} />
              <Route path='/dig/*' element={<Error code={404} />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
