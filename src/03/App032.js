/**
 * 리액트에서 스타일링 하기
 * 방법1: 내부에 적는 방법 (가능은 하나 비추)
 * 방법2: 외부 파일에 작성
 * 방법3: 라이브러리 사용 (ex: 부트스트랩, component-styled)
 */

import "./App032.css";

const App032 = () => {

  const mystyle = {
    color: "red",
  };

  return (
    <>
      <div style={{color: "blue"}}>안녕하세요 css</div>
      <div style={mystyle}>안녕하세요~~~~~~</div>
      {/* className <- JSX 에서 class 지정 구문 */}
      <div className="box-style">외부 CSS 파일 적용</div>
    </>
  );
};

export default App032;