var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var menuDetailSchema = new Schema({
  MenuMasterId: {
    type: Schema.Types.ObjectId
  },
  Sr: {
    type: String
  },
  Item: {
    type: String
  },
  Qty: {
    type: String
  }
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('menudetail', menuDetailSchema);
