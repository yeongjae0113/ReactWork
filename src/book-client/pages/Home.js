import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookItem from '../components/BookItem';


const Home = () => {

  const [books, setBooks] = useState([]);

  useEffect(()=>{
    axios({
      method: "get",
      url: "http://localhost:8088/book",
    })
    .then(response => {
      const {data, status, statusText} = response;
      console.log(data);
      setBooks(data);
    });
  }, []);

  return (
    <div>
      <h1>책 리스트</h1>
            {/* 데이터 collection 으로 목록을 그리는 상황에선
key 값이 없으면, 일부 item 이 수정, 삭제, 추가 등 변경 상황이 발생될때.  전체 목록을 다 그려줘야 한다.
그러나 key 값이 있으면 변경되는 item 을 기준으로 일부분만 다시 그리면 된다. */}

      {books.map(book => <BookItem key={book.id} book={book}/>)}
    </div>
  );
};

export default Home;