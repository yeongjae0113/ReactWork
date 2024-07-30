import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const WritePage = () => {

    const navigate = useNavigate();
    const [post, setPosts] = useState({ user: "", subject: "", content: "" });

    const handleWrite = (e) => {
        e.preventDefault();

        axios({
            method: 'post',
            url: 'http://localhost:8088/board/write',
            data: post,
        })
        .then(response => {
            const { data } = response;
            navigate(`/list`);
            console.log(data);

        });
    };

    const handleForm = (e) => {
        setPosts({...post, [e.target.name]: e.target.value});
      };

    return (
        <div className="container mt-3" style={{ border: 'none'}}>   
            <h2>작성</h2>
            <hr/>
            <Form onSubmit={handleWrite}>
                <Form.Group className="my-3" controlId="formUser">
                    <Form.Label>작성자:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="작성자를 입력하세요"
                        name="user"
                        value={post.user}
                        onChange={handleForm}
                    />
                </Form.Group>

                <Form.Group className="my-3" controlId="formSubject">
                    <Form.Label>제목:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="제목을 입력하세요"
                        name="subject"
                        value={post.subject}
                        onChange={handleForm}
                        />

                </Form.Group>

                <Form.Group className="my-3" controlId="formContent">
                    <Form.Label>내용:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder="내용을 입력하세요"
                        name="content"
                        value={post.content}
                        onChange={handleForm}
                        />
                </Form.Group>
              <Button variant="outline-dark" type="submit" className="me-2">작성완료</Button>
              <Button variant="outline-dark" onClick={() => navigate('/list')} className="me-2">목록</Button>
            </Form>
        </div>
    );
};

export default WritePage;