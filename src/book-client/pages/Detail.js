import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

// path="/book/:id" 으로 전달된 id 값 받아오기

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    id: "",
    title: "",
    author: "",
  });

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/book/" + id,
    })
      .then(response => {
        const { data, status } = response;
        if (status == 200) {
          console.log('읽기', data);
          setBook(data);
        } else {
          alert("읽어오기 실패");
        }
      });
  }, []);

  const updateBook = () => {
    navigate("/updateForm/" + id);
  };

  const deleteBook = () => {
    if (!window.confirm("삭제하시겠습니까?")) return;

    axios({
      method: "delete",
      url: "http://localhost:8080/book/" + id,
    })
      .then(response => {
        const { data, status, statusText } = response;
        if (data === "ok") {
          window.alert("삭제 성공");
          navigate("/");
        } else {
          window.alert("삭제 실패");
        }
      });
  };

  return (
    <div>
      <h1>상세보기: {book.id}</h1>
      <Button variant="warning" onClick={updateBook} className="me-2">수정</Button>
      <Button variant="danger" onClick={deleteBook}>삭제</Button>
      <hr />
      <h3>author: {book.author}</h3>
      <h3>title: {book.title}</h3>
    </div>
  );
};

export default Detail;