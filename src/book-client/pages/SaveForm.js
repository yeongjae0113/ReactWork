import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const SaveForm = () => {
  const navigate = useNavigate();

  // 입력 데이터 의 상태
  const [book, setBook] = useState({
    title:"",
    author:"",
  });

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const submitBook = (e) => {
    e.preventDefault();
    // post 요청
    axios({
      method: 'post',
      url: "http://localhost:8080/book",
      headers: {
        "Content-Type": 'application/json',
      },
      data: JSON.stringify(book),
    })
    .then(response => {
      const {data, status, statusText} = response;
      if(status === 201){  // 201 CREATED 인 경우 성공.
        console.log('책 작성완료', data);
        navigate(`/book/${data.id}`); // 이동
      } else {
        alert('등록 실패');
      }
    });
  };

  return (
    <div>
      <h1>책 등록하기</h1>
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SaveForm;