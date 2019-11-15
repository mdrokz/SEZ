var userModel = require('./models/user.model');

var user = {
    register: function (req, res, rej) {
        var user = new userModel(req.data);
        user.save(function (err, product) {
            if (err) {
                rej(err);
            }
            else {
                res(product);
            }
        });
    },
    getAllUsers: function (req, res) {

    }
}

module.exports = user;
