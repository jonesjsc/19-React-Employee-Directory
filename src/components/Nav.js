import React from "react";
import Navbar from "react-bootstrap/Navbar";

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
      </Navbar>
    </div>
  );
};

export default Nav;
