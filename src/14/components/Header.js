import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const StyledHeaderDiv = styled.div`
  border: 2px solid blue;
  margin: 10px;
`;

// styled.Link <- 이딴거 없다!   Link 를 상속받아서 정의
const StyledHeadLink = styled(Link)`
  color: red;
  text-decoration: none;
`

const Header = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login/80">/login/80</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* href 는 새로이 페이지 로딩발생!  Link 를 사용해야 한다 */}
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login/80">/login/80</Link>
            <Link className="nav-link" to="#pricing">Pricing</Link>
          </Nav>
        </Container>
      </Navbar>


      <StyledHeaderDiv>
        <ul>
          {/* <li><a href="/">메뉴1</a></li>
          <li><a href="/login">메뉴2</a></li> */}

          <li><Link to="/">홈</Link></li>
          <li><Link to="/login">로그인</Link></li>
          <li><Link to="/login/10">로그인/10</Link></li>
          <li><StyledHeadLink to="/login/50">로그인/50</StyledHeadLink></li>
        </ul>
      </StyledHeaderDiv>
    </>


  );
};

export default Header;