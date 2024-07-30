import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdatePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { survey } = location.state || {};

    const [surveyState, setSurvey] = useState({
        id: survey?.id || '',
        name: survey?.name || '',
        age: survey?.age || '',
        gender: survey?.gender || '',
        area: survey?.area || '',
        favorite: Array.isArray(survey?.favorite) ? survey.favorite : (survey?.favorite || '').split(',').filter(Boolean),
    });

    useEffect(() => {
        if (survey) {
            setSurvey({
                id: survey.id || '',
                name: survey.name || '',
                age: survey.age || '',
                gender: survey.gender || '',
                area: survey.area || '',
                favorite: Array.isArray(survey?.favorite) ? survey.favorite : (survey?.favorite || '').split(',').filter(Boolean),
            });
        }
    }, [survey]);

    const handleForm = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(`name: ${name}, value: ${value}, checked: ${checked}`);

        if (type === 'checkbox') {
            setSurvey(prev => {
                const favorites = Array.isArray(prev.favorite) ? prev.favorite : [];
                if (checked) {
                    return {
                        ...prev,
                        favorite: [...new Set([...favorites, value])]
                    };
                } else {
                    return {
                        ...prev,
                        favorite: favorites.filter(fav => fav !== value)
                    };
                }
            });
        } else {
            setSurvey(prev => {
                return { ...prev, [name]: value };
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', surveyState); // 추가된 코드

        if (!validate()) return;

        const updatedSurvey = {
            ...surveyState,
            favorite: surveyState.favorite.join(',') // Convert array to comma-separated string
        };

        axios({
            method: 'put',
            url: 'http://localhost:8088/survey/update',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            data: updatedSurvey,
        })
        .then(response => {
            const { data, status } = response;
            if (status === 200) {
                window.alert('수정 성공');
                navigate(`/detail/${data.id}`);
            } else {
                window.alert('수정 실패');
            }
        })
        .catch(error => {
            if (error.response) {
                console.error('서버 응답 오류:', error.response.data);
                alert(`수정 중 오류가 발생했습니다: ${error.response.data.message || error.response.data}`);
            } else {
                console.error('오류:', error);
                alert('수정 중 오류가 발생했습니다.');
            }
        });
    };

    const [errors, setErrors] = useState({
        area: "",
        favorite: "",
    });

    const validate = () => {
        let isValid = true;
        const Errors = {};

        if (!surveyState.area) {
            Errors.area = "거주지역을 선택해 주세요.";
            isValid = false;
        }
        if (!surveyState.favorite.length) {
            Errors.favorite = "하나 이상은 반드시 골라야 합니다.";
            isValid = false;
        }

        setErrors(Errors);
        return isValid;
    };

    return (
        <div className="container mt-3" style={{border: 'none'}}>
            <h2 className="display-6">설문 수정 {surveyState.id}</h2>
            <hr />
            <div className="alert alert-light d-flex justify-content-between" role="alert">
                <span>Id: {surveyState.id}</span>
                <span>{survey?.createdAt} 작성</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mt-3">
                    <label htmlFor="name"><h5>이름</h5></label>
                    <span className="form-control" readOnly>{surveyState.name}</span>
                </div>

                <div className="mt-3">
                    <label htmlFor="age"><h5>나이</h5></label>
                    <span className="form-control" readOnly>{surveyState.age}</span>
                </div>

                <div className="mt-3">
                    <label><h5>성별</h5></label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="gender1" value="MALE" checked={surveyState.gender === 'MALE'} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="gender1">남자</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" id="gender2" value="FEMALE" checked={surveyState.gender === 'FEMALE'} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="gender2">여자</label>
                    </div>
                </div>

                <div className="mt-3">
                    <label htmlFor="area"><h5>거주지역 <small>(택1)</small></h5></label>
                    <select className="form-select" name="area" id="area" value={surveyState.area} onChange={handleForm}>
                        <option value="">-- 거주지역을 선택해 주세요 --</option>
                        <option value="서울">서울</option>
                        <option value="경기도">경기도</option>
                        <option value="기타">기타</option>
                    </select>
                    {errors.area && <div className="text-danger">{errors.area}</div>}
                </div>

                <div className="mt-3">
                    <label><h5>이상형 <small>(1개 이상 선택)</small></h5></label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="송민호" id="favorite1" checked={surveyState.favorite.includes('송민호')} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="favorite1">송민호</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="이승원" id="favorite2" checked={surveyState.favorite.includes('이승원')} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="favorite2">이승원</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="서현기" id="favorite3" checked={surveyState.favorite.includes('서현기')} onChange={handleForm} />
                        <label className="form-check-label" htmlFor="favorite3">서현기</label>
                    </div>
                    {errors.favorite && <div className="text-danger">{errors.favorite}</div>}
                </div>

                <div className="my-3">
                    <Button variant="outline-dark" type="submit" className="me-2">수정완료</Button>
                    <Button variant="outline-dark" onClick={() => navigate('/list')} className="me-2">목록</Button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePage;