var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Umongo = require('mongoose-unique-validator');


var userSchema = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});


userSchema.plugin(Umongo);


module.exports = mongoose.model('users',userSchema);
