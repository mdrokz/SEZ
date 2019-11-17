const userCtrl = require("./user.controller");
var citizenCtrl = require('./citizen.controller');
const ycontriCtrl = require("./yearly-contri.controller");



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
        case "user/editUser":
          userCtrl.editUser(request, resolve, reject)
          break;
        case "user/deleteUser":
          userCtrl.deleteUser(request, resolve, reject)
          break;

          case "citizen/addUser":
            citizenCtrl.addUser(request, resolve, reject);
            break;
          case "citizen/getAllUsers":
            citizenCtrl.getAllUsers(request, resolve, reject);
            break;
          case "citizen/editUser":
            citizenCtrl.editUser(request, resolve, reject)
            break;
          case "citizen/deleteUser":
            citizenCtrl.deleteUser(request, resolve, reject)
            break;

            case "yearlycontri/addUser":
            ycontriCtrl.addUser(request, resolve, reject);
            break;
          case "yearlycontri/getAllUsers":
            ycontriCtrl.getAllUsers(request, resolve, reject);
            break;
          case "yearlycontri/editUser":
            ycontriCtrl.editUser(request, resolve, reject)
            break;
          case "yearlycontri/deleteUser":
            ycontriCtrl.deleteUser(request, resolve, reject)
            break;
      }
    });
  }
}


module.exports = route;
