import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPage = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [survey, setSurvey] = useState({
        id: '',
        name: '',
        age: '',
        gender: '',
        area: '',
        favorite: '',
        createdAt: '',
    });

    useEffect(() => {
        axios({
            method: 'get',
            url: 'http://localhost:8088/survey/detail/' + id
        })
        .then(response => {
            const {data, status} = response;
            if (status == 200) {
                console.log(data);
                setSurvey(data);
            } else {
                window.alert('읽어오기 실패');
            }
        });
    },[]);

    const deleteSurvey = () => {
        if (!window.confirm('삭제하시겠습니까?'))
        return;

        axios({
            method: 'delete',
            url: 'http://localhost:8088/survey/delete/' + id,
        })
        .then(response => {
            const {data, status} = response;
            if (data === 1) {
                window.alert('삭제 성공');
                navigate('/list');
            } else {
                window.alert('삭제 실패');
            }
        })
    }



    return (
    <div class="container mt-3" style={{ border: 'none'}}>
        <h2 class="display-6">설문 상세조회</h2>
        <hr/>
        <div class="alert alert-light d-flex justify-content-between" role="alert">
          <span>Id: {survey.id}</span>
          <span>{survey.createdAt} 작성</span>
        </div>
        <section>
          <div class="mt-3">
            <h5>이름</h5>
            <span class="form-control" readonly>{survey.name}</span>
          </div>

          <div class="mt-3">
            <h5>나이</h5>
            <span class="form-control" readonly>{survey.age}</span>
          </div>

          <div class="mt-3">
            <h5>성별</h5>
            <span class="form-control" readonly> {survey.gender === 'MALE' ? '남자' : survey.gender === 'FEMALE' ? '여자' : '알 수 없음'}</span>
          </div>

          <div class="mt-3">
            <h5>거주지역</h5>
            <span class="form-control" readonly>{survey.area}</span>
          </div>

          <div class="mt-3">
            <label>
              <h5>이상형</h5>
            </label>
            <span class="form-control" readonly>{survey.favorite}</span>
          </div>
        </section>

        <div class="d-flex my-3">
          <Button class="btn btn-outline-dark" onClick={() => navigate('/update', {state: {survey}})}>수정</Button>
          <Link to={'/list'} class="btn btn-outline-dark ms-2" >목록</Link>
          <Link type="button" class="btn btn-outline-danger ms-2" onClick={deleteSurvey}>삭제</Link>
          <Link to={'/'} class="btn btn-outline-dark ms-2">작성</Link>
        </div>
    </div>
    );
};

export default DetailPage;