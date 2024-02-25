const express = require('express');
const mongoose = require('mongoose');

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({
    path: `${__dirname}/.env.prod`,
  });
} else {
  require('dotenv').config({
    path: `${__dirname}/.env.dev`,
  });
}

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to Mongoose'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/api/test', (req, res) => {
  res.send('Test');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
