import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';

const Header = () => {

    const {isDark} = useContext(ThemeContext)
    const user = useContext(UserContext);
    console.log(user)

    return (
        <header style={{backgroundColor: isDark ? 'black' : 'lightgray', 
                        color: isDark ? 'white' : 'black',}}>
            <h1>Welcome 유인아 월드</h1>
            <h2>{user}!!</h2>
        </header>
    );
};

export default Header;