const studentModel = require('./getStudentData.model');


getStuentData = (req, res) => {
  const query = req.query.name;
  studentModel.find({ name: query }, (erorr, data) => { res.send(data[0]); });

};
module.exports = getStuentData;