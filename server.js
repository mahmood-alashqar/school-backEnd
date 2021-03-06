const server = require('express');
const getStudent = require('./models/getStudentData');
const addStudent = require('./models/addStudent');
const cors = require('cors');
const app = server();
app.use(cors());
app.use(server.json());
const port = 3003;
// studentTest.save();
app.get('/student', getStudent);
app.post('/student', addStudent);
app.listen(port, () => { console.log(`we are on port ${port}`) });