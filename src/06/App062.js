import React, { useState } from 'react';
let sample = [
  { id: 1, name: "홍길동" },
  { id: 2, name: "김성동" },
  { id: 3, name: "박지혜" },
  { id: 4, name: "나흥부" },
];

const newUser = { id: 5, name: "유인아" };

const App062 = () => {
  console.log('App062() 호출');

  // let sample = [
  //   { id: 1, name: "홍길동" },
  //   { id: 2, name: "김성동" },
  //   { id: 3, name: "박지혜" },
  //   { id: 4, name: "나흥부" },
  // ];

  // 다운로드 받은 user 데이터를 '상태' 로 관리하고 싶다면
  const [users, setUsers] = useState(sample);

  const [num, setNum] = useState(5);

  const download = () => {
    // 밥먹자. 

    // 1.
    //setUsers(sample);   // sample 이 지역변수일때와 전역으로 선언되었을때의 동작이 다르다!

    // 2.
    // sample.push(newUser);  // push() 는 불변함수가 아니다!  sample 의 내용은 바꾸지만, sample 자체를 바꾸진 않았다.
    // console.log('download()', sample);
    // setUsers(sample);

    // 3.
    //setUsers([...sample]);  // 동일한 내용의 데이터지만, 새로운 데이터(상태)로 인식하여 새로 그린다.

    // 4. 다운로드 받은 데이터를 기존 users 뒤에 이어쓰기
    //setUsers([...sample, newUser]);  // 새로 화면은 그린다. 그러나 sample 자체에 데이터가 추가된건 아니다.

    // 5.
    // sample.push(newUser);
    // setUsers([...sample]);

    // 6
    sample.push({ ...newUser, id: num });
    setUsers([...sample]);
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map(u => <h3>{u.id}, {u.name}</h3>)}
    </div>
  );
};

export default App062;