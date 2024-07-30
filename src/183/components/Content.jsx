import React from 'react';

const Content = ({isDark}) => {
    return (
        <div style={{backgroundColor: isDark ? 'black' : 'lightgray', 
                        color: isDark ? 'white' : 'black',}}>
            <p>유인아 님, 어서 주무세요</p>
        </div>
    );
};

export default Content;