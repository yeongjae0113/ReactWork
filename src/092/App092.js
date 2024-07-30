import React from 'react';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';

/**
 * 메모이제이션(memoization)은
 * 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써
 * 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다.
 * 동적 계획법의 핵심이 되는 기술이다
 */

/**
 * useMemo : 자주 사용되는 '값'을 메모이제이션 한다. (캐시한다)
 * useCallback : 인자로 받은 콜백 '함수' 자체를 메모이제이션 한다.
 * 
 *      useCallback(() => {return value}, [item])
 */

const App092 = () => {
    return (
        <div>
            <Comp2/>
        </div>
    );
};

export default App092;