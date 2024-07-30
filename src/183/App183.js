import React, { useState } from 'react';
import Page from './components/Page';

const App183 = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <Page isDark={isDark} setIsDark={setIsDark}/>
            
        
    );
};

export default App183;