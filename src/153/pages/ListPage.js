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

  // <input> 값 가져오기 위한 상태변수 설정
  const [post, setPost] = useState({ id: "", title: "", content: "" });

  // 최초에 데이터를 다운받아서 그려야 한다
  const [posts, setPosts] = useState([
    { id: 1, title: "제목1", content: "내용1" },
    { id: 2, title: "제목2", content: "내용2" },
    { id: 3, title: "제목3", content: "내용3" },
    { id: 4, title: "제목4", content: "내용4" },
    { id: 5, title: "제목5", content: "내용5" },
  ]);

  const handleWrite = (e) => {
    e.preventDefault();   // form 의 submit 시 기본동작 막기.

    if (!isNaN(parseInt(post.id))) {  // 정수값이면 글 '추가', '수정'

      let idx = posts.findIndex(p => parseInt(p.id) === parseInt(post.id));
      if (idx === -1) {
        setPosts([...posts, post]); // '추가'
      } else {
        setPosts(posts.map(p => parseInt(p.id) === parseInt(post.id) ? { ...p, ...post } : p));
      }
    }

  };

  // onXXX() 콜백함수 (event handler) 의 매개변수는 'event객체'
  // 입력한 값으로 '상태' 업데이트
  // const handleChangeId = (e) => {
  //   console.log('Id:', e.target.value);
  //   setPost({...post, id: e.target.value});    
  // };
  // const handleChangeTitle = (e) => {
  //   console.log('Title:', e.target.value);
  //   setPost({...post, title: e.target.value});    
  // };
  // const handleChangeContent = (e) => {
  //   console.log('Content:', e.target.value);
  //   setPost({...post, content: e.target.value});    
  // };

  // 똑같은 함수 여러개 만들지 말고 하나로 만들기!
  // 어케? => computed property name 사용.

  const handleForm = (e) => {
    console.log(e.target.name, e.target.value);   // name-value 확인
    setPost({ ...post, [e.target.name]: e.target.value });   // name 값 활용하여, 기존 상태의 특정 property 업데이트
    console.log(post.id, post.title, post.content);
  };

  // 삭제
  const handleDelete = (id) => {
    console.log(`${id} 을 삭제합니다`);
    setPosts(posts.filter(post => parseInt(post.id) !== parseInt(id)));
  };


  return (
    <>
      <h4>글목록 페이지</h4>
      <form onSubmit={handleWrite}>
        {/* 
        id: <input type="number" placeholder='id 입력...' value={post.id} onChange={handleChangeId} /><br />
        제목: <input type="text" placeholder='제목을 입력하세요...' value={post.title} onChange={handleChangeTitle}/><br />
        내용: <input type="text" placeholder='내용을 입력하세요...' value={post.content} onChange={handleChangeContent}/><br /> 
        */}
        id: <input type="number" placeholder='id 입력...' value={post.id} onChange={handleForm} name="id" /><br />
        제목: <input type="text" placeholder='제목을 입력하세요...' value={post.title} onChange={handleForm} name="title" /><br />
        내용: <input type="text" placeholder='내용을 입력하세요...' value={post.content} onChange={handleForm} name="content" /><br />
        <button type="submit">글쓰기</button>
      </form>
      <hr />
      {posts.map(post =>
        <StyleItemBoxDiv>
          <div>
            번호:{post.id} 제목:{post.title} 내용:{post.content}
          </div>
          <button onClick={() => handleDelete(post.id)}>삭제</button>
        </StyleItemBoxDiv>
      )}
    </>
  );
};

export default ListPage;