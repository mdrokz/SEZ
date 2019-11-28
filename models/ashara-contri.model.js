var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var asharaContriSchema = new Schema({
  Sr: {
    type: String
  },
  Name: {
    type: String
  },
  Date: {
    type: String
  },
  Amount: {
    type: String
  },
}, {
  timestamps: true
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('asharacontri', asharaContriSchema);
