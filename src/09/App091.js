import React, { createRef, useRef, useState } from 'react';
/**
 * useRef()
 *   https://react.dev/reference/react/useRef
 *   주로, dom 을 변경할때 사용  ()
 *   useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * 
 *   const ref = useRef(initialValue)
 */
const App091 = () => {
  console.log('App091 호출');

  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '유인아' },
    { id: 2, name: '베리베리' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <div ref={myRef}>박스</div>
      <button onClick={() => {
        console.log(myRef);
        console.log(myRef.current);  //  참조하는 DOM 객체!
        myRef.current.style.backgroundColor = 'red';
        myRefs[1].current.style.backgroundColor = 'limegreen';
      }}>색변경</button>
      <hr />
      {list.map((user, index) => <div ref={myRefs[index]}>{user.id}:{user.name}</div>)}
    </div>
  );
};

export default App091;