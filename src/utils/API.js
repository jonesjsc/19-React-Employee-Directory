import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=20&nat=US";

// Export an object with a "search" method that searches the Giphy API for the passed query
function API() {
  axios.get(BASEURL);
}

export default API;
