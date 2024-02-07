import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import InterviewQuestion from '../pages/InterviewQuestion';
import FreeApi from '../pages/FreeApi';
import Navbar from '../components/UI/Navbar'
const AppRoutes = () => {
    return (
        <div>
            <div className='row'>
                <BrowserRouter>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path='Home' element={<Home></Home>}></Route>
                        <Route path='InterviewQuestion' element={<InterviewQuestion></InterviewQuestion>}></Route>
                        <Route path='FreeApi' element={<FreeApi></FreeApi>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

export default AppRoutes;