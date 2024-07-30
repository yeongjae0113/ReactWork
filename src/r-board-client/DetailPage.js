import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [post, setPosts] = useState({
        id: "",
        user: "", 
        subject: "",
        content: "", 
        viewCnt: "",
        regDate: "",
    });

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:8088/board/detail/" + id
        })
        .then(response => {
            const { data, status } = response;
            if (status == 200){
                console.log(data);
                setPosts(data);
            } else {
                window.alert('읽어오기 실패');
            }
        });
    }, []);

    const deletePost = () => {
        if (!window.confirm('삭제하시겠습니까?')) return;

        axios({
            method: "delete",
            url: "http://localhost:8088/board/delete/" + id,
        })
            .then(response => {
                const { data, status, statusText } = response;
                if (data === 1) {
                    navigate('/');
                } else {
                    window.alert("삭제 실패");
                }
            });

    };

    return (
        <div className="container mt-3" style={{ border: 'none'}}>   
            <h2>조회 - {post.subject}</h2>
            <hr/>
            <div className="mb-3 mt-3 clearfix">
                <span className="float-start me-2">id: {post.id}</span>
                <span className="float-end ms-4">작성일: {post.regDate}</span>
                <span className="float-end">조회수: {post.viewCnt}</span>
            </div>

            <section>
                <div className="mb-3">
                    <label>작성자:</label>
                    <span className="form-control">{post.user}</span>
                </div>
                <div className="mb-3 mt-3">
                    <label>제목:</label>
                    <span className="form-control">{post.subject}</span>
                </div>
                <div className="mb-3 mt-3">
                    <label>내용:</label>
                    <span className="form-control">{post.content}</span>
                </div>

                <div className="d-flex">
                    <Button variant="outline-dark" onClick={() => navigate('/update', { state: { post } })} className="btn btn-outline-dark">수정</Button>
                    <Link to="/list" className="btn btn-outline-dark ms-2">목록</Link>
                    <Button variant="outline-danger" className="ms-2" onClick={deletePost}>삭제</Button>
                    <Link to="/write" className="btn btn-outline-dark ms-2">작성</Link>
                </div>
            </section>
        </div>
    );
};

export default DetailPage;