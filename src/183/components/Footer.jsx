import React from 'react';

const Footer = ({isDark, setIsDark}) => {

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div style={{backgroundColor: isDark ? 'black' : 'lightgray', 
                        color: isDark ? 'white' : 'black',}}>
            <button onClick={toggleTheme}>Dark Mode</button>
        </div>
    );
};

export default Footer;