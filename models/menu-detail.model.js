var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var menuDetailSchema = new Schema({
  MenuMasterId: {
    type: Schema.Types.ObjectId
  },
  SR: {
    type: String
  },
  Item: {
    type: String
  },
  QTY: {
    type: String
  },
}, {
  timestamps: true
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('menudetail', menuDetailSchema);
