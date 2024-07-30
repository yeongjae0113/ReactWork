import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

//  page 컴포넌트에서 인자로 받아오는 {isDark, setIsDark} 를 지워준다.
//  그리고 중간 컴포넌트이니 isDark와 setIsDark 가 필요가 없다.

//  isDark 를 실질적으로 사용하지 않고, 자녀 컴포넌트들에게 전달하는 역할
//  data 필요하지 않음 !

const Page = () => {

    
    return (
        <div>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Page;