var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var userSchema = new Schema({
  Id: {
    type: String
  },
  username: {
    type: String
  },
  Password: {
    type: String
  },
  Name: {
    type: String
  },
  ITS: {
    type: String
  },
  Mobile: {
    type: String
  },
  Age: {
    type: String
  },
  Title: {
    type: String
  },
  SectorIncharge: {
    type: String
  },
  SpecialSkills: {
    type: String
  }
}, {
  timestamps: true
});


userSchema.plugin(Umongo);

module.exports = mongoose.model('users', userSchema);
