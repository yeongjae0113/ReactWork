import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const WritePage = () => {
    const navigate = useNavigate();
    
    const [survey, setSurvey] = useState({
        name: '',
        age: '',
        gender: '',
        area: '',
        favorite: [],
    });

    const handleWrite = (e) => {
        e.preventDefault();

        if (!validate()) return;

        const surveyData = {
            ...survey,
            favorite: survey.favorite.join(',')
        };

        axios.post('http://localhost:8088/survey/write', surveyData)
            .then(response => {
                const { data, status } = response;
                window.alert('작성 성공');
                navigate(`/detail/${data.id}`); // 디테일 페이지로 이동
            })
            .catch(error => {
                window.alert('작성 실패');
                console.error(error);
            });
    };

    const handleForm = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setSurvey(prevSurvey => {
                const favorites = prevSurvey.favorite || [];
                if (checked) {
                    return {
                        ...prevSurvey,
                        favorite: [...new Set([...favorites, value])] 
                    };
                } else {
                    return {
                        ...prevSurvey,
                        favorite: favorites.filter(fav => fav !== value)
                    };
                }
            });
        } else if (type === 'radio') {
            setSurvey({ ...survey, gender: value });
        } else if (name === 'age') {
            setSurvey({ ...survey, [name]: Number(value) });
        } else {
            setSurvey({ ...survey, [name]: value });
        }
    };

    const [errors, setErrors] = useState({
        name: "",
        age: "",
        gender: "",
        area: "",
        favorite: "",
    });

    const validate = () => {
        let isValid = true;
        const Errors = {};

        if (!survey.name) {
            Errors.name = "이름은 필수입니다.";
            isValid = false;
        }
        if (!survey.age || survey.age < 0) {
            Errors.age = "나이는 0이상의 값이어야 합니다.";
            isValid = false;
        }
        if (!survey.gender) {
            Errors.gender = "성별을 선택해 주세요.";
            isValid = false;
        }
        if (!survey.area) {
            Errors.area = "거주지역을 선택해 주세요.";
            isValid = false;
        }
        if (!survey.favorite.length) {
            Errors.favorite = "하나 이상은 반드시 골라야 합니다.";
            isValid = false;
        }

        setErrors(Errors);
        return isValid;
    };

    return (
        <div className="container mt-3" style={{ border: 'none' }}>
            <h2 className="display-6">설문 작성</h2>
            <hr />
            <form onSubmit={handleWrite}>
                <div className="mt-3">
                    <label htmlFor="name"><h5>이름 <small>(필수)</small></h5></label>
                    <input type="text" className="form-control" id="name" placeholder="이름을 입력하세요" name='name' value={survey.name} onChange={handleForm} />
                    {errors.name && <div className="text-danger">{errors.name}</div>}
                </div>

                <div className="mt-3">
                    <label htmlFor="age"><h5>나이</h5></label>
                    <input type="number" className="form-control" id="age" placeholder="나이를 입력하세요" name='age' value={survey.age} onChange={handleForm} min="0" />
                    {errors.age && <div className="text-danger">{errors.age}</div>}
                </div>

                <div className="mt-3">
                    <label><h5>성별</h5></label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="gender1" value="MALE" name="gender" checked={survey.gender === 'MALE'} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="gender1">남자</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="gender2" value="FEMALE" name="gender" checked={survey.gender === 'FEMALE'} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="gender2">여자</label>
                    </div>
                    {errors.gender && <div className="text-danger">{errors.gender}</div>}
                </div>

                <div className="mt-3">
                    <label htmlFor="area"><h5>거주지역 <small>(택1)</small></h5></label>
                    <select className="form-select" name="area" id="area" value={survey.area} onChange={handleForm}>
                        <option value="">-- 거주지역을 선택해 주세요 --</option>
                        <option value="서울">서울</option>
                        <option value="경기도">경기도</option>
                        <option value="기타">기타</option>
                    </select>
                    {errors.area && <div className="text-danger">{errors.area}</div>}
                </div>

                <div className="mt-3">
                    <label><h5>이상형 <small>(1개이상 선택)</small></h5></label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="송민호" id="favorite1" checked={survey.favorite.includes('송민호')} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="favorite1">송민호</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="이승원" id="favorite2" checked={survey.favorite.includes('이승원')} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="favorite2">이승원</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="서현기" id="favorite3" checked={survey.favorite.includes('서현기')} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="favorite3">서현기</label>
                    </div>
                    {errors.favorite && <div className="text-danger">{errors.favorite}</div>}
                </div>

                <div className="my-3">
                    <Button variant="outline-dark" type="submit" className="me-2">작성완료</Button>
                    <Button variant="outline-dark" onClick={() => navigate('/list')} className="me-2">목록</Button>
                </div>
            </form>
        </div>
    );
};

export default WritePage;