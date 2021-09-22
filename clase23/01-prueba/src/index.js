import fs from 'fs';

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

//----------------------------------------------------------------------------------------------------
//conseguir todos los articulos de un id en especial

// const id = '6145f15975a527f507148a95';
// const articles = data.filter((article) => article.author._id === id);

// console.log(`Los articulos del author con id ${id} son los siguientes: `);
// console.log(articles);
// //----------------------------------------------------------------------------------------------------

// //----------------------------------------------------------------------------------------------------
// //Conseguir todos los comentarios de un usuario en particular
// const userId = '6145f159b90a59691484f99d';
// const userComments = [];

// data.forEach((article) => {
//   article.comments.forEach((comment) => {
//     if (comment.commenter._id === userId) {
//       userComments.push(comment);
//     }
//   });
// });

// console.log(`Los comentarios del user con id ${userId} son los siguientes: `);
// console.log(userComments);
// //----------------------------------------------------------------------------------------------------

// //----------------------------------------------------------------------------------------------------
// //Conseguir el usuario con mas posteos
let commentsPerUser = {};

data.forEach((article) => {
  article.comments.forEach((comment) => {
    if (commentsPerUser[comment.commenter._id]) {
      commentsPerUser[comment.commenter._id]++;
    } else {
      commentsPerUser[comment.commenter._id] = 1;
    }
  });
});

let userWithMostComments = {};
Object.keys(commentsPerUser).forEach((userId) => {
  if (commentsPerUser[userId] > (userWithMostComments.comments || -1)) {
    userWithMostComments = {
      user: userId,
      comments: commentsPerUser[userId],
    };
  }
});

console.log(`El usuario con mas comentarios es`);
console.log(userWithMostComments);
// //----------------------------------------------------------------------------------------------------
