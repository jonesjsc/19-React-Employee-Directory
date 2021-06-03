import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

const DataTable = (props) => {
  //
  // let's setup state so can can access these objects anywhere we want to
  //
  const [displayedData, setDisplayedData] = useState("");
  const [displayedDataSave, setDisplayedDataSave] = useState("");
  const [displayedSortStatus, setDisplayedSortStatus] = useState("Name");

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

  //
  // let's monitor the props.state.search value and if there is a change let's update the contents of the rendered table
  //
  useEffect(() => {
    // console.log(props.state.search);
    filterSearchedData();
  }, [props.state.search]);

  const filterSearchedData = () => {
    let searchString = props.state.search.toLowerCase();
    //
    // lets be sure that when there is no text in the search box that the entire dataset is displayed
    //
    if (searchString === "") {
      setDisplayedData(displayedDataSave);
    }

    if (searchString) {
      const searchResults = displayedDataSave.filter((val) => {
        const firstNameLastName =
          val.name.first.toLowerCase() + " " + val.name.last.toLowerCase();
        if (firstNameLastName.includes(searchString)) {
          return true;
        }
      });
      setDisplayedData(searchResults);
    }
  };

  const sortByName = () => {
    //
    // crude - but effective - visual indicator ↓ ↑ on the sort order.
    // displayedData has what's on screen - so we just need to sort this output
    //

    const holdMyArray = displayedData;

    if (displayedSortStatus === "Name" || displayedSortStatus === "Name ↓") {
      setDisplayedSortStatus("Name ↑");
      holdMyArray.sort(function (a, b) {
        var nameA = a.name.first.toUpperCase();
        var nameB = b.name.first.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names are equal
        return 0;
      });
    }
    if (displayedSortStatus === "Name ↑") {
      setDisplayedSortStatus("Name ↓");
      holdMyArray.sort(function (a, b) {
        var nameA = a.name.first.toUpperCase();
        var nameB = b.name.first.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names are equal
        return 0;
      });
    }
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={sortByName}>{displayedSortStatus}</th>
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
