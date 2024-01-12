const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// HANDLE SERVING OF STATIC FILES AT ROOT ENDPOINT
app.use('/',express.static(path.resolve(__dirname, '../src')));




// HANDLER FOR UNDEFINED ROUTES
app.use('/', (req, res) => {
  return res.status(404).send('Sorry! Page not found. Error - 404');
})

// GLOBAL ERROR HANDLER FOR EXPRESS
app.use((err, req, res, next) => {

  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: '500',
    message: {err: 'Sorry, an error has occurred.'},
  }

  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})

// LISTEN ON SPECIFIED PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
