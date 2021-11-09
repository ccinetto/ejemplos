const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Hola' });
});

app.listen(8080, console.log('UP'));
