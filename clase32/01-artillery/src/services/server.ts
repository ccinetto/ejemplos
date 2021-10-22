import express from 'express';
import { PORT } from '..';
import { isPrime } from '../utils';
const app = express();

app.get('/', (req, res) => {
  console.log('Resolving / endpoint');
  res.json({
    pid: process.pid,
    msg: `HOLA desde puerto ${PORT}`,
  });
});

app.get('/prime', (req, res) => {
  const primes = [];
  const max = Number(req.query.max) || 1000;
  for (let i = 1; i <= max; i++) {
    if (isPrime(i)) primes.push(i);
  }
  res.json(primes);
});

export default app;
