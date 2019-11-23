const userCtrl = require("./user.controller");
const citizenCtrl = require('./citizen.controller');
const ycontriCtrl = require("./yearly-contri.controller");
const asharacontriCtrl = require('./ashara-contri.controller');


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

        case "asharacontri/addUser":
          asharacontriCtrl.addUser(request, resolve, reject);
          break;
        case "asharacontri/getAllUsers":
          asharacontriCtrl.getAllUsers(request, resolve, reject);
          break;
        case "asharacontri/editUser":
          asharacontriCtrl.editUser(request, resolve, reject)
          break;
        case "asharacontri/deleteUser":
          asharacontriCtrl.deleteUser(request, resolve, reject)
          break;
      }
    });
  }
}


module.exports = route;
