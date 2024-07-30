import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ListPage = () => {

    const navigate = useNavigate();
    const[survey, setSurvey] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8088/survey/list',
        })
        .then(response => {
            const {data, status} = response;
            console.log(data);
            setSurvey(data);
        });
    }, []);

    return (
        <div class="container mt-3" style={{border: 'none'}}>
            <h2>설문 목록</h2>
            <hr/>
        
            <table class="table table-hover">
              <thead class="table-success">
                <tr>
                  <th>#</th>
                  <th>이름</th>
                  <th>작성일시</th>
                </tr>
              </thead>
              <tbody>
                {survey.map(survey => (
                    <tr key={survey.id} onClick={() => navigate('/detail/' + survey.id)}>
                        <td>{survey.id}</td>
                        <td>{survey.name}</td>
                        <td>{survey.createdAt}</td>
                    </tr> 
                ))}
              </tbody>
            </table>
        
            <div class="row">
              <div class="col-12">
              <Button variant="outline-dark" onClick={() => navigate('/write')}>작성</Button>
              </div>
            </div>
          </div>
          
    );
};

export default ListPage;