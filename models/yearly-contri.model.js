var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var yearlycontriSchema = new Schema({
  Id: {
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
  //   1441: {
  //     type: String
  //   },
  //   1442: {
  //     type: String
  //   },
  //   1443: {
  //     type: String
  //   },
  //   Mobile: {
  //     type: String
  //   },
  //   Mobile: {
  //     type: String
  //   },
  //   Mobile: {
  //     type: String
  //   },
  timestamp: true

});


// userSchema.plugin(Umongo);

module.exports = mongoose.model('yearlycontri', yearlycontriSchema);
