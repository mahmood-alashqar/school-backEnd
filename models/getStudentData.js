const studentModel = require('../models/getStudentData.model');
getStudent = (req, res) => {
  const name = req.query.name;
  studentModel.find({ name: name }, (error, data) => {
    console.log('getStudent', data[0]);
    res.send(data[0]);
  });
};
module.exports = getStudent;