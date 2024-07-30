import React from 'react';
import "../CSS/App.css";

import { useSelector } from 'react-redux';

const Top = () => {

  // store 의 state 에 등록되어 있는 number 를 꺼내옴.
  const {number, user} = useSelector((store) => store);

  return (
    <div className='sub_container'>
      <h4>Top</h4>
      번호: {number}<br/>
      이름: {user.name}<br/>
      나이: {user.age}<br/>
    </div>
  );
};

export default Top;