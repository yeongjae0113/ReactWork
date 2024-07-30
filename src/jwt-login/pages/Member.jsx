import React, { useContext, useEffect } from 'react';
import Header from '../components/Header/Header';
import { LoginContext } from '../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import * as Swal from '../apis/alert';


const Member = () => {

    const {isLogin, roles} = useContext(LoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLogin) {
            Swal.alert("로그인이 필요합니다.", "로그인 화면으로 이동합니다.", "warning", () => { navigate("/login") })
            return;
        }
        if (!roles.isMember) {
            Swal.alert("권한이 없습니다.", "이전 화면으로 이동합니다.", "warning", () => { navigate(-1) })
            return  
        }
        console.log(`/member : ${roles}`);
    }, []);

    return (
        <>
        {
            isLogin && roles.isMember &&
            <>
            <Header/>
            <h1>Member</h1>   
            </>
        }
        </>
    );
};

export default Member;