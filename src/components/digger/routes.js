import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './login.js';
import Dig from './dig.js';
import Error from '../error.js';

function DigRoutes(props) {
    return (
        <Routes>
            <Route exact path='/' element={<Navigate to='/login' />} />
            <Route exact path='/login/' element={<Login />} />
            <Route exact path='/home/' element={<Dig />} />
            <Route path='/*' element={<Error code={404} />} />
        </Routes>
    );
}

export default DigRoutes;
