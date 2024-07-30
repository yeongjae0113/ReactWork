import React from 'react';
import Login from '../components/login/Login';
import { useParams } from 'react-router-dom';

const LoginPage = () => {
    // dynamic segment . 경로상의 값들이 넘어온다.
    let params = useParams();
    console.log(params.id);

    return (
        <Login/>
    );
};

export default LoginPage;