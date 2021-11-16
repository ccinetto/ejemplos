import axios from 'axios';

export const axiosEjemplo1 = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
};
