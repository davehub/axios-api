const axios = require('axios');
const PLACEHOLDER_URL_API = ('https://jsonplaceholder.typicode.com/users/');

// // Make a request for a user with a given ID
axios.get(`${PLACEHOLDER_URL_API}`)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  
axios.post(`${PLACEHOLDER_URL_API}`, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  // Perform a PUT request
axios.put(`${PLACEHOLDER_URL_API}`, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  


// Perform a DELETE request
axios.delete(`${PLACEHOLDER_URL_API}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });