const mongoose = require('mongoose');

// Create a schema object/class for the users
var UsersSchema = new mongoose.Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  userID: {type: Number, required: true}
})


// Exporting the model, which will create a collection in the database (in the db_url) with the name users (first parameter in plural)
module.exports = mongoose.model('User', UsersSchema);