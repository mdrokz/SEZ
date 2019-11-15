const userCtrl = require("./user.controller");

var route = {
  parse: (request) => {
    return new Promise((resolve, reject) => {
      switch (request.path) {
        case "user/addUser":
          userCtrl.addUser(request, resolve, reject);
          break;
        case "user/getAllUsers":
          userCtrl.getAllUsers(request, resolve, reject);
          break;
        case "user/login":
          userCtrl.login(request, resolve, reject)
          break;
      }
    });
  }
}


module.exports = route;
