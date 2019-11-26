import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
@Injectable({
  providedIn: 'root'
})
export class IpcService {

  // private ipc: IpcRenderer

  constructor(private electron: ElectronService) {
    // if ((<any>window).require) {
    // try {
    //   this.ipc = (<any>window).require('electron').IpcRenderer;
    // } catch (error) {
    //   if (error) {
    //     throw error;
    //   }
    //}
    // } else {
    //   console.warn("Could not load electron ipc");
    // }
    if (this.electron.isElectronApp) {
      console.log("ready to go");
    } else {
      console.log("error");
    }
  }

  send(path: string, listener: string, data: any) {
    return new Promise<any>((resolve, reject) => {
      console.log(this.electron);
      this.electron.ipcRenderer.once(listener, (event, arg) => {
        resolve(arg);
      });
      this.electron.ipcRenderer.send("api", { path: path, listener: listener, data: data });
    });
  }

  registerUser(data: any) {
    return new Promise<any>((resolve, reject) => {
      console.log(this.electron);
      // this.electron.ipcRenderer.once("registerUserResponse", (event, arg) => {
      //   resolve(arg);
      // });
      // this.electron.ipcRenderer.send("registerUser", data);
    });
  }

  loginUser(data: any) {
    return new Promise<any>((resolve, reject) => {
      // this.electron.ipcRenderer.once("loginUserResponse", (event, arg) => {
      //   resolve(arg);
      // });
      // this.electron.ipcRenderer.send("loginUser", data);
    });
  }

  checkPath() {
    return new Promise<any>((resolve, reject) => {
      this.electron.ipcRenderer.once("response", (event, arg) => {
        resolve(arg);
      })
      this.electron.ipcRenderer.send("currentPath");
    });
  }

}
