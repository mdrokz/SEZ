var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var citizenSchema = new Schema({
  Id: {
    type: String
  },
  Name: {
    type: String
  },
  Sector: {
    type: String
  },
  SEZCode: {
    type: String
  },
  Mobile: {
    type: String
  }
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('citizen', citizenSchema);
