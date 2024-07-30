import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';

const HomePage = () => {
  // http요청 (fetch 혹은 axios 등 사용)
  // Page 에 필요한 데이터는 Page 에서 다운받습니다.
  //  (component에 기술하지 마세요)

  // HomePage 에서 다운로드할까?  Home 에 다운로드할까?
  // '재사용'되는 쪽에는 다운로드 하지 않도록 합니다.
  // 따라서 데이터 다운로드는 HomePage 에서 하되
  // 다운받은 데이터는 Home(component) 으로 전달(pass)되어야 한다

  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  // 최초에 페이지로딩시 수행할 작업
  useEffect(() => {
    // 다운로드하여 setBoards 호출
    let data = [
      { id: 1, title: "제목1", content: "내용1" },
      { id: 2, title: "제목2", content: "내용2" },
      { id: 3, title: "제목3", content: "내용3" },
    ];
    // ※ 주의! fetch 나 axios 로 다운로드시 '비동기' 동작 주의!
    setBoards([...data]);

    setUser({id:1, username: '베리베리'});
  }, []);


  return (
    <>
      <Header />
      {/* 하위 component 로 데이터를 pass!  이를 props 라 한다 */}
      <Home boards={boards} id={1} name={'유인아'} setBoards={setBoards}
        number={number} setNumber={setNumber} 
        userInfo={user}/>
      <Footer />
    </>
  );
};

export default HomePage;