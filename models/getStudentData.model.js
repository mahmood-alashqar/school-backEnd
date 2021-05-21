const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/studentsDB',
  {
    useNewUrlParser: true, useUnifiedTopology: true
  });
const studentSchema = {
  name: String,
  grade: Number,
  id: Number,
  location: String,
}
const studentModel = mongoose.model('studentsC', studentSchema);
const studentTest = new studentModel({
  name: "mahmoud",
  grade: 95,
  id: 999999,
  location: 'irbid',
});
studentTest.save();
module.exports = studentModel;