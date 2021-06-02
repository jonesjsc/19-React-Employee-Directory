import React, { useState, useEffect } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import ExampleToast from "./components/ExampleToast";
import DataTable from "./components/DataTable";

import API from "./utils/API";

import "./App.css";

const App = () => (
  <Container className='p-3'>
    <Jumbotron>
      <h1 className='header'>Employee Directory</h1>
    </Jumbotron>
    <DataTable />
  </Container>
);

export default App;
