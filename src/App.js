import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import ExampleToast from "./components/ExampleToast";
import DataTable from "./components/DataTable";
import Nav from "./components/Nav";
import SearchBox from "./components/SearchBox";

import API from "./utils/API";

import "./App.css";

const App = () => {
  //
  // let's setup the state handler for the search function here and set the initial search value to ""
  //
  const [search, setSearch] = useState("");
  return (
    <Container className='p-3'>
      <Nav />
      <SearchBox state={{ search, setSearch }} placeholder='Name Search Here' />
      <DataTable />
    </Container>
  );
};

export default App;
