import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SaveForm from './pages/SaveForm';
import Detail from './pages/Detail';
import UpdateForm from './pages/UpdateForm';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';


const BookApp = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" Component={Home}/>   {/* 목록 */}
        <Route path="/saveForm" Component={SaveForm}/>   {/* 작성 */}
        <Route path="/book/:id" Component={Detail}/>   {/* 상세 */}
        <Route path="/updateForm/:id" Component={UpdateForm}/>   {/* 수정 */}
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default BookApp;