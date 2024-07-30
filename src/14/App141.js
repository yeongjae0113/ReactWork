import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import {BrowserRouter, Route, Routes} from "react-router-dom";

// 아래 App 을 routing 할거다!
// 모든 페이지에는 <Header/> 와 <Footer/> 가 있다는 설정
const App141 = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" Component={HomePage}/>
          <Route path="/login" Component={LoginPage}/>

          {/* Dynamic Segment 사용
            url 경로상의 데이터를 받아올수 있다.
            Component 에서 받아올수 있다.
          */}
          <Route path="/login/:id" Component={LoginPage}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App141;