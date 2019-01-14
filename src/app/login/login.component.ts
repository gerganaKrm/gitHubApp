import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {LoginService} from './login.service';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  result: boolean;
  form = {
    username: '',
    password: ''
  };
  constructor(private router: Router,
              private loginService: LoginService) {}

  login(): void {
    this.loginService.login(this.form.username, this.form.password).subscribe(response => {
      this.result = response.res;
      if (this.result) {
        this.router.navigate(['/repos']);
      }
    });
  }

  ngOnInit(): void {
    this.result = true;
  }
}
