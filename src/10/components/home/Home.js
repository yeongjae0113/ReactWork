import React from 'react';
import { styled } from 'styled-components';

// props 받기.
// function 의 매개변수로 기술.
// props 는 object.
// props 에 여러 key-value 값(property) 넘겨줄수 있다

const Home = (props) => {
  // const boards = props.boards;
  // console.log(boards);  // 확인!
  // const id = props.id;
  // console.log(id);
  // const name = props.name;
  // console.log(name);

  const { boards, setBoards, id, name } = props;  // destructuring assignment 활용
  const { number, setNumber } = props;
  const { userInfo } = props;

  console.log(boards, id, name);

  // styled component 에 JavaScript 표현식 사용 가능!
  const color1 = 'cyan';
  const StyledButton1 = styled.button`
    color: ${color1};
    background-color: ${'orangered'};
    border-style: ${(color1 === 'cyan') ? 'dashed' : 'none'};
  `;

  const StyledButton2 = styled.button`
    margin: 0 5px;
    /* 주의!!  ↓ 여기의 props 매개변수는 Home() 함수의 매개변수 props 가 아니다.  stypled component 에 전달된 props 다! */
    background-color: ${props => props.bgColor};
  `;

  // 부모로부터 받은 데이터로 조건부 스타일링.
  const StyledButton3 = styled.button`
    color: ${props => props.u.username === '유인아' ? 'blue' : 'red'};
  `;

  // styled component 상속
  const StyledButton4 = styled(StyledButton2)`
    border: 2px dotted hotpink;
  `;

  return (
    <div>
      <h1>홈페이지</h1>
      {/* 자식쪽에선 setBoards() 직접 사용 못함 */}
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map(board =>
        <h4>제목: {board.title} 내용: {board.content}</h4>)}
      <hr />
      <h2>number {number}</h2>
      <button onClick={() => setNumber(number + 1)}>증가</button>

      <hr />
      <StyledButton1>버튼1</StyledButton1>
      <StyledButton2 bgColor='limegreen'>버튼2</StyledButton2>
      <StyledButton3 u={userInfo}>버튼3</StyledButton3>
      <StyledButton4 bgColor='yellow'>버튼4</StyledButton4>
    </div>
  );
};

export default Home;