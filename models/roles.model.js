var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  role: {
    type: String
  },
}, {
  timestamps: true
});


userSchema.plugin(Umongo);


module.exports = mongoose.model('roles', userSchema);
