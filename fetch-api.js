const PLACEHOLDER_URL_API = ('https://jsonplaceholder.typicode.com/users/');
fetch (`${PLACEHOLDER_URL_API}`,{
    method: 'GET',
})
const userID = 4;
fetch (`${PLACEHOLDER_URL_API}/${userID}`,{
    method: 'GET'})

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          name: 'foo',
          email: 'bar',
          userId: 11,
          username: 'cool',
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

    fetch('https://jsonplaceholder.typicode.com/posts/5', {
        method: 'PUT',
        body: JSON.stringify({
          id: 5,
          title: 'foe',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      })
  .then((response) => response.json())
  .then((data) => console.log(data))

