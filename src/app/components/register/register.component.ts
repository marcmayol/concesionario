import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public registerForm;
  public status: boolean = null;
  public message: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.title = 'Register';
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
    this.registerForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      surname: new FormControl(this.user.surname, [
        Validators.required,
        Validators.minLength(3)
      ]),
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
    this.userService.register(this.user).subscribe(
      response => {
        //@ts-ignore
        if (response.status === 'succes') {
          this.registerForm.reset();
          //@ts-ignore
          this.status = true;
          this.message = response.message;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  get name() {
    return this.registerForm.get('name');
  }

  get surname() {
    return this.registerForm.get('surname');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  public checksatus(name) {
    let formEl = this.registerForm.get(name);
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
