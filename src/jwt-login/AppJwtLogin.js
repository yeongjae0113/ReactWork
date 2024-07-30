import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Join from './pages/Join';
import Member from './pages/Member';
import Admin from './pages/Admin';
import Home from './pages/Home';
import LoginContextProvider from './contexts/LoginContextProvider';

const AppJwtLogin = () => {
    return (
        <BrowserRouter>
            <LoginContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/member" element={<Member />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            </LoginContextProvider>
        </BrowserRouter>
    );
};

export default AppJwtLogin;