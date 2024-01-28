const axios = require('axios'); // Import Axios for HTTP requests.

const getUser = async (token) => {
  try {
    // Perform a GET request to the GitHub user endpoint.
    // Include the Authorization header with the provided token.
    const response = await axios.get(`https://api.github.com/user`, {
      headers: { Authorization: `${token}` }
    });
    // Return the data part of the response if the request is successful.
    return response.data;
  } catch (error) {
    // Return the error's response data if it exists, otherwise the error message.
    return error.response ? error.response.data : error.message; 
  }
};

module.exports = { getUser };