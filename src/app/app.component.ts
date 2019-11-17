import { Component } from '@angular/core';
import { IpcService } from './services/ipc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ipc: IpcService) {
    this.ipc.checkPath().then(res => {
      console.log(res);
    })
  }
}
