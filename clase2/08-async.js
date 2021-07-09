const axios = require('axios');

// axios
//   .get('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log('SUPUESTAMENTE ESTE ES EL FINAL DEL CODIGO');
const funcionAsync = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(resp.data[0]);
  } catch (err) {
    console.log(err);
  }
};

funcionAsync();
