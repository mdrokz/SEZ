const userCtrl = require("./user.controller");

var route = {
    parse: (request) => {
        return new Promise((resolve, reject) => {
            switch (request.path) {
                case "user/register":
                    userCtrl.register(request, resolve, reject);
                    break;
                case "user/getAllUsers":
                    userCtrl.getAllUsers(request, resolve, reject);
                    break;
            }
        });
    }
}


module.exports = route;