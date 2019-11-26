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
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('darees', dareesContriSchema);
