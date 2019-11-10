import { Component, OnInit } from '@angular/core';
import { IpcService } from '../services/ipc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  redirectDelay: number;
  showMessages: any;
  strategy: string;
  errors: string[];
  messages: string[];
  submitted: boolean;
  rememberMe: boolean;
  constructor(private ipc:IpcService,private router:Router) { }

  ngOnInit() {
  }
  login(form) {
    if(form.valid) {
      this.ipc.loginUser(this.user).then(res => {
        console.log(res);
        if(res != null || res != {}) {
          this.router.navigateByUrl("pages/dashboard");
        }
      })
    }
  }
}
