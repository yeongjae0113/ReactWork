/**
 * JSX (JavaScript XML)
 * JSX 한개의 'element' 만 리턴한다
 *   여러개 리턴할 경우 하나의 태그로 감싸면 된다.
 *   <> ... </>  사용 가능.  --> DOM 에는 렌더링 안됨.
 */


// 변수 선언은 let, const 로만 해야 함  (var 사용하지 말기!)
// JSX 내 { .. }  안에는 유효한 JavaScript 표현식 사용 가능
//    https://ko.legacy.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
// JSX 안에선 if문 사용 불가!  삼항연산자는 가능!

let a = 10;
const b = 20;

// 화면 렌더링 할때 아래 함수가 호출된다.
const App031 = () => {
  console.log("App031() 호출됨~~~~❤🧡");
  let c = 30;
  console.log(`c=${c}`);

  return (
    // 괄호 감쌀 경우 return 바로 다음에 시작괄호 붙이기
    <>
      {/* JSX 의 주석 */}
      <div>
        안녕하세요 {a} + {b} = {a + b}<br />
        {a} ** {2} = {a ** 2}
      </div>
      <div>{a === c ? '같다' : '다르다'}</div>
      {/* 조건부 렌더링 시 SCE 사용 */}
      <h3>유인아 {c > 20 && '아직은 젊습니다'}</h3>
      <h1>어쩌구 저쩌구</h1>
    </>
  );
};

export default App031;