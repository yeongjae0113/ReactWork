import React, { useCallback, useEffect, useState } from 'react';

// useCallback 을 사용하면 화면이 그려질 때 마다 반복해서
// 정의 생성되는 함수 객체에 대한 부하를 줄여줌으로 성능 향상을 기대할 수 있다.

const Comp2 = () => {
    const [number, setNumber] = useState(0);
    
    // useCallback() 을 한 후 ,[] 까지 해주면 매번 useEffect 가 생성되지 않는다. (개발자 모드에서 확인 가능)
    const calculate = useCallback(() => {
        // setNumber(parseInt(number) + 1)}, []);
        console.log(number)}, []);

    useEffect(() => {
        console.log('caculate() 가 변경되었습니다.')
    }, [calculate])

    return (
        <div>
            <h1>Comp2</h1>
            <input type='number' value={number} onChange={e => setNumber(e.target.value)}/> {/* 상태값 변경 */}
            <br/>
            <button onClick={calculate}>calculate</button>
        </div>
    );
};

export default Comp2;