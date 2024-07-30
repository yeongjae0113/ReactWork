import React from 'react';

const Header = ({isDark}) => {
    return (
        <header style={{backgroundColor: isDark ? 'black' : 'lightgray', 
                        color: isDark ? 'white' : 'black',}}>
            <h1>Welcome 유인아 월드</h1>
        </header>
    );
};

export default Header;