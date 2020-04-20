import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserService } from '../app/user.service';
import { Router } from '@angular/router';

const confirmPasswordValidator = (formControl: FormControl) => {
  if (formControl && formControl.parent) {
    console.log('FC', formControl.parent.controls);
    const password = formControl.parent.controls.password.value;
    console.log('Password', password, 'Confirm Password', formControl.value);
    if (password === formControl.value) {
      return null;
    } else {
      return {
        confirmPassword: true,
      };
    }
  }
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userRegForm: FormGroup;
  userSignInForm: FormGroup;
  displaySignInForm = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {
    console.log('Logging from Homecomponent');
    this.userRegForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, confirmPasswordValidator]],
    });
    this.userSignInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  signup() {
    console.log(this.userRegForm.value);
    this.userService
      .create(this.userRegForm.value)
      .subscribe(this.successHandler, (err) => {
        alert('Failed to create user. Try again.  ');
        console.log(err);
      });
  }
  signin() {
    console.log(this.userSignInForm.value);
    this.userService
      .signin(this.userSignInForm.value)
      .subscribe(this.successHandlerForSignIn.bind(this), (err) => {
        alert('Failed to login user. Try again.  ');
        console.log(err);
      });
  }

  successHandlerForSignIn(res) {
    console.log('This', this);
    if (res.signin) {
      alert('Logging in');
      console.log('Router', this.router);
      sessionStorage.setItem('token', res.token);
      this.router.navigate(['/products']);
    } else {
      alert('Try again');
    }
  }
  successHandler(res) {
    if (res.code) {
      if (res.code === 11000) {
        alert('User email is already registered. Try with new Email');
      }
    } else {
      alert('User created successfully');
    }
  }

  showSignInForm() {
    this.displaySignInForm = true;
  }
  showSignUpForm() {
    this.displaySignInForm = false;
  }
}
