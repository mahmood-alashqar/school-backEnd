const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/student', { useNewUrlParser: true, useUnifiedTopology: true });

const studentSchema = {
  name: String,
  grade: Number,
  id: Number,
  loc: String,
}
const studentModel = mongoose.model('studentCollection', studentSchema);

const studentData = new studentModel({
  name: 'mahmood',
  grade: 95,
  id: 12345,
  loc: 'Irbid'
});
// studentData.save();
module.exports = studentModel;