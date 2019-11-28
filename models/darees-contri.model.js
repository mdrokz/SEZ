var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var dareesContriSchema = new Schema({
  SEZ: {
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
  }
}, {
  timestamps: true
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('darees', dareesContriSchema);
