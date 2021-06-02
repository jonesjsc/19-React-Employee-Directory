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
  // the [] in useEffect means that this function will only get run once, on page load.
  // like componentDidMount(); this is a good place to run the query
  //
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20&nat=US").then((data) => {
      setDisplayedData(data.data.results);
      setDisplayedDataSave(data.data.results);
    });
  }, []);

  function filterItems(arr, query) {
    return arr.filter(function (el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
  }

  //
  // let's monitor the props.state.search value and if there is a change let's update the contents of the rendered table
  //
  useEffect(() => {
    // console.log(props.state.search);
    filterSearchedData();
  }, [props.state.search]);

  const filterSearchedData = () => {
    console.log(props.state.search.toLowerCase());
    // const newObj = displayedData.map((val) => val.name.first);
    //
    // the intent here is to provide a case insensitive search on the combined first name last name
    // through toLowerCase and .includes.
    //

    // const currentSearchResults = displayedData.filter(function (val) {
    //   return val.name.first.toLowerCase() + " " + val.name.last.toLowerCase();
    //   console.log(concatName);
    // });

    // using filter we should be able to use includes i think to
    // eeee.toLowerCase().includes(props.state.search.toLowerCase())

    // str.toLowerCase().includes('Stark'.toLowerCase()); // true
    // console.log(currentSearchResults);
  };

  return (
    <div>
      <Table striped bordereed hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {displayedData ? (
            displayedData.map((data) => {
              return (
                <tr key={data.login.uuid}>
                  <td className='d-flex justify-content-center'>
                    <img alt='Thumbnail' src={data.picture.thumbnail}></img>
                  </td>
                  <td>
                    {data.name.first} {data.name.last}
                  </td>
                  <td>{data.phone}</td>
                  <td>{data.email}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
export default DataTable;
