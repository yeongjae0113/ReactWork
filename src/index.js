import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import App02 from './02/App02';     // 리액트 프로젝트 구조.
import App021 from './02/App021';
import App031 from './03/App031';   // JSX 기초
import App032 from './03/App032';   // CSS 스타일링
import App041 from './04/App041';   // component 화.
import App042 from './04/App042';   // 데이터 상태, 렌더링
import App061 from './06/App061';   // useState 상태값 관리
import App062 from './06/App062';   // useState (배열 상태값 다루기)
import App071 from './07/App071';   // useEffect
import App081 from './08/App081';   // useMemo
import App091 from './09/App091';   // useMemo
import App101 from './10/App101';   // style 적용하는 방법 1, 2
import App102 from './10/App102';   // style-component
import LoginPage from './10/pages/LoginPage';    // page - component 구조  
import reportWebVitals from './reportWebVitals'; // props
import HomePage from './10/pages/HomePage';
import App141  from './14/App141';  // react-router-dom, react-bootstrap
import App151 from './15/App151';   // 간단 계시판 
import App152 from './152/App152';  // 간단 계시판. 'single page'
import App153 from './153/App153';  // UDATE, DELETE 기능 구현
import App201 from './20/App201';   // <select>
import App181 from './181/App181';  // 하위 component로 전달하는 방식 & 문제점 고찰
import App182 from './182/App182';  // Redux
import App183 from './183/App183';  // 하위 component로 전달하는 방식 & 문제점 고찰
import App184 from './184/App184';  // Context API 사용. useContext

import App092 from './092/App092';  // useCallback

import BookApp from './book-client/BookApp'; // book-server 스프링 연동
import RBoardApp from './r-board-client/RBoardApp';
import RSurveyApp from './r-survey-client/RSurveyApp';
import AppJwtLogin from './jwt-login/AppJwtLogin';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<React.StrictMode>*/}
    <AppJwtLogin/>
  {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
