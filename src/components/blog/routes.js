import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "../blog/home.js"
import ArchiveList from '../blog/archivelist.js';
import Article from '../blog/article.js';
import Error from '../error.js';

function BlogRoutes(props) {
  return (
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/archive' element={<ArchiveList />} />
        <Route exact path='/articles/:id' element={<Article />} />
        <Route path='/*' element={<Error code={404} />}/>
    </Routes>
  );
}

export default BlogRoutes;