const mongoose = require('mongoose');

// Create a schema object/class for the todos
var TodosSchema = new mongoose.Schema({
  title: {type: String, required: true},
  dueByDate: {type: Date, required: true},
  createdOn: {type: Date, required: false},
  status: {type: String, required: true},
  active: {type: Boolean, required: true},
  username: {type: String, required: false}
})


// Exporting the model, which will create a collection in the database (in the db_url) with the name todos (first parameter in plural)
module.exports = mongoose.model('ToDo', TodosSchema);