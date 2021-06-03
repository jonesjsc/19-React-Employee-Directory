import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import DataTable from "./components/DataTable";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";

import "./App.css";

const App = () => {
  //
  // let's setup the state handler for the search function here and set the initial search value to ""
  //
  const [search, setSearch] = useState("");
  //
  // props.state.search contains whatever text the user has typed into the search box and is updated with every change
  //
  return (
    <Container className='p-3'>
      <Nav />
      <SearchBox state={{ search, setSearch }} placeholder='Name Search Here' />
      <DataTable state={{ search, setSearch }} />
    </Container>
  );
};

export default App;
