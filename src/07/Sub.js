import React from 'react';

let num1 = 10, num2 = 20;

const Sub = () => {
  console.log("07/Sub() 호출");

  return (
    <div>
      Sub
    </div>
  );
};

export default Sub;   // default export 는 1개만 가능
export {num1 as num, num2};  // 다른것들을 export 하려면 { ... } 안에 기술 