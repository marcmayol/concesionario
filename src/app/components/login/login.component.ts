import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public loginForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.title = 'identificate';
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
    this.loginForm = new FormGroup({
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signup(this.user.email, this.user.password).subscribe(
      response => {
          localStorage.setItem('token',response[0]);
          localStorage.setItem('user',response[1]);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public checksatus(name) {
    let formEl = this.loginForm.get(name);
    if (formEl.valid) {
      let element = document.getElementById(name);
      element.classList.add("input-success");
      element.classList.remove("input-error");
    }
    if (formEl.invalid) {
      let element = document.getElementById(name);
      element.classList.add("input-error");
      element.classList.remove("input-success");

    }
  }

}
