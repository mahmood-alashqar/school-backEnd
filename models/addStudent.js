const studentModel = require('../models/getStudentData.model');
addStudent = (req, res) => {
  const { studentName, studentGrade, studentId, studentLocation } = req.body;
  // console.log(studentName) ;
  // const studentTest = new studentModel({
  //   name: studentName,
  //   grade: Number(studentGrade),
  //   id: Number(studentId),
  //   location: studentLocation,
  // });
  // studentTest.save();

  studentModel.find({}, (error, data) => {
    console.log(data);
    data.push({
      name: studentName,
      grade: Number(studentGrade),
      id: Number(studentId),
      location: studentLocation,
    });
    data[0].save();
    console.log('saved ???');
    res.send(data);
  });
};
module.exports = addStudent;