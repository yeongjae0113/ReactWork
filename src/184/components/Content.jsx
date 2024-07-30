import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Content = () => {

    const {isDark} = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: isDark ? 'black' : 'lightgray',
                    color: isDark ? 'white' : 'black',}}>
            <p>유인아 님, 어서 주무세요</p>
        </div>
    );
};

export default Content;