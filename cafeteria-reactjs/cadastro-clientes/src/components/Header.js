import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    
    <header>
      <Navbar style={{ backgroundColor: '#b0e0e6' }}>
       
        <Container>

          <Navbar.Brand href="#justify-content-end">
            <img
              alt="Cafeteria"
              src="https://img.icons8.com/stickers/512/coffee-beans-.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Cafeteria Tellue
          </Navbar.Brand>


          <Nav className="justify-content-center" activeKey="/home">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cardápio</Nav.Link>
          </Nav>

        </Container>
      
      </Navbar>

    </header>
  );
};

export default Header;



