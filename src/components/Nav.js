import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav2 from "react-bootstrap/Nav";

const Nav = (props) => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src={process.env.PUBLIC_URL + "/favicon-32x32.png"}
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{" "}
          Employee Directory - My First React App
        </Navbar.Brand>
        {/* <Nav2>
          <Nav2.Link href='/about'>About</Nav2.Link>
        </Nav2> */}
      </Navbar>
    </div>
  );
};

export default Nav;
