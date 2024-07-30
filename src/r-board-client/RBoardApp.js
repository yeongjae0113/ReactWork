import ListPage from './ListPage';
import WritePage from './WritePage';
import UpdatePage from './UpdatePage';
import DetailPage from './DetailPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

const RBoardApp = () => {


    return (
        <>
          <BrowserRouter>
          <Routes>
            <Route path='/' Component={HomePage}/>
            <Route path="/list" Component={ListPage}/>   {/* 목록 */}
            <Route path="/write" Component={WritePage}/>   {/* 작성 */}
            <Route path="/detail/:id" Component={DetailPage}/>   {/* 상세 */}
            <Route path="/update" Component={UpdatePage}/>   {/* 수정 */}
          </Routes>
          </BrowserRouter>
        </>
      );
};

export default RBoardApp;