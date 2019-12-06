import { Component, OnInit } from '@angular/core';
import { IpcService } from '../../services/ipc.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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

  constructor(
    private ipc: IpcService,
    private router: Router
  ) { }

  ngOnInit() {
    if (environment.production == false) {
      this.user.username = "md";
      this.user.Password = "123";
    }
  }
  login(form) {
    if (form.valid) {
      console.log(this.user)
      this.ipc.send("user/login", "login", this.user).then(res => {
        console.log(res);
        if (res.data != null && res.status != 500) {
          localStorage.setItem('username', res.data.username);
          this.router.navigateByUrl("sez/users");
        }
      })
    }
  }
}