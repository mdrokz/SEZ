"use strict";
// Modules to control application life and create native browser window
Object.defineProperty(exports, "__esModule", {
  value: true
});
var electron_1 = require("electron");
var mongoose = require('mongoose');
var path = require("path");
// const url = require("url");
var route = require('./data-access/route');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var win, serve;
var args = process.argv.slice(1);
serve = args.some(function (val) {
  return val === '--serve';
});

// connect to mongodb
// var mongoUrl = "mongodb://localhost:27017/test";
var mongoUrl = "mongodb+srv://sez:sez%40123@sez-zgsak.mongodb.net/sez";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Mongo is connected...');
  }
});

var used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// ipc communication
electron_1.ipcMain.on("api", function (event, arg) {
  // console.log(arg);
  route.parse(arg).then(res => {
    win.webContents.send(arg.listener, {
      status: 200,
      data: res
    });
  }, err => {
    win.webContents.send(arg.listener, {
      status: 500,
      error: err
    });
  });
});

electron_1.ipcMain.on("currentPath",function(event,arg) {
  win.webContents.send("response",__dirname);
});

// used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// var used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);

// electron_1.ipcMain.on("registerUser", function (event, arg) {
//   console.log(arg);
//   var user = new userModel(arg);
//   user.save(function (err, product) {
//     if (err) {
//       win.webContents.send("registerUserResponse", {
//         error: err
//       });
//     } else {
//       win.webContents.send("registerUserResponse", {
//         status: 200
//       });
//     }
//   });
// });

// electron_1.ipcMain.on("loginUser", function (event, arg) {
//   userModel.findOne(arg, function (err, res) {
//     if (err) {
//       win.webContents.send("loginUserResponse", {
//         error: err
//       });
//     } else {
//       win.webContents.send("loginUserResponse", {
//         data: res._doc
//       });
//     }
//   });
// });

// electron_1.ipcMain.on("getUsers",function(event,arg) {
//     userModel.find({},function(err,res) {
//         if(err) {
//             win.webContents.send("getUsersResponse",{
//                 error: err
//             });
//         } else {
//             console.log(res);
//             win.webContents.send("getUsersResponse", {
//                 data: res
//             });
//         }
//     });
// });

// used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// electron_1.ipcMain.on("registerUser3", function (event, arg) {
//     console.log(arg);
//     var user = new userModel(arg);
//     user.save(function (err, product) {
//         if (err) {
//             win.webContents.send("registerUserResponse", {
//                 error: err
//             });
//         }
//         else {
//             win.webContents.send("registerUserResponse", {
//                 status: 200
//             });
//         }
//     });
// });
// used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
// electron_1.ipcMain.on("popup", function (event, arg) {
//     console.log(event, arg);
// });
// used = process.memoryUsage().heapUsed / 1024 / 1024;
// console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
function createWindow() {
  // Create the browser window.
  win = new electron_1.BrowserWindow({
    width: 1366,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
  });
  // and load the index.html of the app.
  // win.loadURL(
  //   url.format({
  //     pathname: path.join(__dirname, `/dist/electron-poc/index.html`),
  //     protocol: "file:",
  //     slashes: true
  //   })
  // );
  // and load the index.html of the app.
  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(__dirname + "/node_modules/electron")
    });
    win.loadURL('http://localhost:7700');
  } else {
    win.loadFile('./build/index.html');
  }
  // Open the DevTools.
  win.webContents.openDevTools();
  // Emitted when the window is closed.
  win.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed.
electron_1.app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    electron_1.app.quit();
  }
});
electron_1.app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=main.js.map
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
