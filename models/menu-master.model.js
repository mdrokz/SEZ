var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var menuMasterSchema = new Schema({
  Date: {
    type: Date
  },
  peopleCount: {
    type: String
  },
  ThaalCount: {
    type: String
  }
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('menumaster', menuMasterSchema);
