const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Every user has an email and password.  The password is not stored as
// plain text - see the authentication helpers below.
const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  email:String
});

mongoose.model('employee', employeeSchema);

