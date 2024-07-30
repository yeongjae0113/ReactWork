import React, { useState } from 'react';
import { styled } from 'styled-components';

const StyleItemBoxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  height: 40px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const ListPage = () => {

  // 최초에 데이터를 다운받아서 그려야 한다
  const [posts, setPosts] = useState([
    { id: 1, title: "내용1" }, { id: 2, title: "내용2" }, { id: 3, title: "내용3" },
    { id: 4, title: "내용4" }, { id: 5, title: "내용5" },
  ]);

  return (
    <>
      <h4>글목록 페이지</h4>
      <hr/>
      {posts.map(post => 
        <StyleItemBoxDiv>
          <div>
            번호:{post.id} 제목:{post.title}
          </div>
          <button>삭제</button>
        </StyleItemBoxDiv>        
        )}
    </>
  );
};

export default ListPage;