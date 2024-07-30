import React, { useEffect, useState } from 'react';
import { num } from '../../07/Sub';

const Comp1 = () => {
    const [number, setNumber] = useState(0);
    
    // Comp1 이 호출될 때 마다 (즉, 다시 그려질 때 마다)
    // 새로 정의되어 생성되는 함수 객체 calculate()
    const calculate = () => {setNumber(parseInt(number) + 1)};

    useEffect(() => {
        console.log('caculate() 가 변경되었습니다.')
    }, [calculate])

    return (
        <div>
            <h1>Comp1</h1>
            {/* 값을 변경할 때 마다 다시 그려지면서 calculate 함수 객체도 새로 생성된다 */}
            <input type='number' value={number} onChange={e => setNumber(e.target.value)}/> {/* 상태값 변경 */}
            <br/>
            <button onClick={calculate}>calculate</button>
        </div>
    );
};

export default Comp1;