import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/list');
    }, [navigate]);

    return (
        <div>

        </div>
    );
};

export default HomePage;