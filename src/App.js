import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
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
let url = window.location.href;

if (url.indexOf('#') == -1) {
  url += '#/blog/'
}

window.location.href = url;

function App(props) {
  return (
    <HashRouter basename=''>
        <Nav />
        <Routes>
              {/* blog routes */}
              <Route exact path='/blog/' element={<Home />} />
              <Route exact path='/blog/archive' element={<ArchiveList />} />
              <Route exact path='/blog/articles/:id' element={<Article />} />
              <Route path='/blog/*' element={<Error code={404} />}/>
              {/* dig routes */}
              <Route exact path='/dig/' element={<Navigate to='/dig/login' />} />
              <Route exact path='/dig/login/' element={<Login />} />
              <Route exact path='/dig/home/' element={<Dig />} />
              <Route path='/dig/*' element={<Error code={404} />} />
        </Routes>
        <Footer />
    </HashRouter>
  );
}

export default App;
