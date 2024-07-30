import React, { useState } from 'react';
import Page from './components/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

/**
 *  useContext()
 *   전역 상태를 다루기 위해 제공되는 리액트의 Context API
 *   컴포넌트에서 context 를 읽고 구독할수 있게 해주는 hook
 *
 *   const value = useContext(SomeContext)
 *
 */

// 1) 우선 context 를 만들어준다.
// 2) 상위 컴포넌트에서 context를 import 시켜준다.
// 그리고 page 컴포넌트를 만들어준 context의 provider로 감싸준다.
// context의 provider는 value 라는 props를 받는데 이 안에는 전달하고자 하는 데이터를 넣어준다.
// ThemeContext 감싸는 모든 하위 컴포넌트는 props를 사용하지 않고 value로 넣어준 값에 접근할 수 있다. 그리고 페이지 컴포넌트가 갖는 값들을 지워준다.

const App184 = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider>
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            <Page/>
        </ThemeContext.Provider>
        </UserContext.Provider>
        
    );
};

export default App184;