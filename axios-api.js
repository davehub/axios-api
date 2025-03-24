const axios = require('axios');
const PLACEHOLDER_URL_API = ('https://jsonplaceholder.typicode.com/users/');


axios.get(`${PLACEHOLDER_URL_API}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {

    console.log(error);
  })
  .finally(function () {

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


axios.delete(`${PLACEHOLDER_URL_API}`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });