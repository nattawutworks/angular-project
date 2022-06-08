import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-from',
  templateUrl: './login-from.component.html',
  styleUrls: ['./login-from.component.css']
})
export class LoginFromComponent implements OnInit {

  title = 'login';
  hide_pass = true;
  loginForm: FormGroup = new FormGroup({});
  

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onConfirmLink() {
    this.router.navigateByUrl(("register"));
  }

}
