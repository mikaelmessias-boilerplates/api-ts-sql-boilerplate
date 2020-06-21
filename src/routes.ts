import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  console.log("Hello World");
  res.send('Hello World');
})

export default routes;