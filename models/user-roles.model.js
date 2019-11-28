var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var userRoleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  roleId: {
    type: Schema.Types.ObjectId
  },
}, {
  timestamps: true
});


userRoleSchema.plugin(Umongo);


module.exports = mongoose.model('userRoles', userRoleSchema);
