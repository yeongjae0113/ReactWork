import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ListPage = () => {


    const navigate = useNavigate();
    const [post, setPosts] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8088/board/list',
        })
        .then(response => {
            const {data, status, statusText} = response;
            console.log(data);
            setPosts(data);
        });
    }, []);

    return (
        <div className="container mt-3" style={{ border: 'none'}}>   
            <h2>목록</h2>
            <hr/>
            <table className="table table-hover">
                <thead className="table-success">
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map(post => (
                        <tr key={post.id} onClick={() => navigate('/detail/' + post.id)}>
                            <td>{post.id}</td>
                            <td>{post.subject}</td>
                            <td>{post.user}</td>
                            <td>{post.viewCnt}</td>
                            <td>{post.regDate}</td> 
                        </tr>
                    ))}
                </tbody>
            </table>

            <Button variant="outline-dark" onClick={() => navigate('/write')}>작성</Button>
        </div>

    );
};

export default ListPage;