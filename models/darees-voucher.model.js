var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var dareesVoucherSchema = new Schema({
  Reciever: {
    type: String
  },
  Date: {
    type: String
  },
  Amount: {
    type: String
  },
  Against: {
    type: String
  }

}, {
  timestamps: true
});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('dareesVoucher', dareesVoucherSchema);
