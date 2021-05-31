import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";

// import "./App.css";

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home} />
    </Router>
  );
};

export default App;
