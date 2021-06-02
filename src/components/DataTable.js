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

  //
  // let's monitor the props.state.search value and if there is a change let's update the contents of the rendered table
  //
  useEffect(() => {
    // console.log(props.state.search);
    filterSearchedData();
  }, [props.state.search]);

  const filterSearchedData = () => {
    let searchString = props.state.search.toLowerCase();
    console.log(searchString);

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
