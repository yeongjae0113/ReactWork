

/**
 *  useState()
 *   React Hook 라이브러리 함수중 하나
 *   component 에 state variable (상태변수) 추가
 * 
 *   const [state, setState] = useState(initialState);
 * 
 *      state: 상태값
 *      setState : 상태값을 변경할 함수
 *      initialState : 상태값의 초깃값.
 * 
 *   component 는 상태값이 변경되면 다시 그린다 (함수호출&리턴)
 */

import { useState } from "react";
import Sub from "./Sub";

function App061() {

  //let number = 1;  // 이건 '상태값' 이 아니다.  '상태' 값이 아니라서 '변경' 이 되어도 렌더링 안된다!

  const [number, setNumber] = useState(1);  // component 상태값 설정
  // number 라는 상태변수가 선언되고,  1 로 초기화 된다.
  // 이를 변경하려면 setNumber() 함수를 사용해야 한다

  const add = () => {
    // number++;
    setNumber(number + 1); // setNumber는 React 에게 number 상태값 변경을 요청.
                          // 이렇게 상태변수를 변화시켜야 return 이 된다.
    console.log("add: ", number);
  };

  return (
    <>
      <div>
        <h1>숫자: {number}</h1>
        <button onClick={add}>더하기</button>
        <Sub/>
      </div>
    </>
  );
}

export default App061;