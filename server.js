const express = require('express');
const app = express();
const Port = 3030;
const cors = require('cors');
const getStudentData = require('./models/getStudentData');
app.use(cors());











app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/student', getStudentData);

















app.listen(Port, () => {
  console.log(`server is ${Port}`);
})