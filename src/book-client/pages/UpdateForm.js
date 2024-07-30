import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
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
          window.alert("읽어오기 실패");
        }
      });
  }, []);

  const submitBook = (e) => {
    e.preventDefault();
    
    axios({
      method: 'put',
      url: 'http://localhost:8080/book',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      data: JSON.stringify(book),
    })
    .then(response => {
      const {data, status, statusCode} = response;
      if(status === 200){
        window.alert('수정 성공');
        console.log('책 수정완료', data);
        navigate(`/book/${data.id}`);
      } else {
        window.alert('수정 실패');
      }
    });
  };

  const changeValue = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>책 수정하기 | Id: {book.id}</h1>
      <Form onSubmit={submitBook}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" onChange={changeValue} name="title" value={book.title}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter Author" onChange={changeValue} name="author" value={book.author}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UpdateForm;