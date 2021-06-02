import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const DataTable = (props) => {
  //
  // let's setup state so can can access these objects anywhere we want to
  //
  const [displayedData, setDisplayedData] = useState("");
  const [displayedDataSave, setDisplayedDataSave] = useState("");
  //
  // the [] means that this function will only get run once, on page load.  like componentDidMount();
  // this is a good place to run the query
  //
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20&nat=US").then((data) => {
      setDisplayedData(data.data.results);
      setDisplayedDataSave(data.data.results);
    });
  }, []);

  return <div>Hello from DataTable - check state</div>;
};
export default DataTable;
