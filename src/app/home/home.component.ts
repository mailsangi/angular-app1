import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nameOfProduct = new FormControl('Macbook air', [
    Validators.required,
    Validators.maxLength(5)
  ]);
  email = new FormControl('abc@def.com', [
    Validators.required,
    Validators.email
  ]);
  creditCard = new FormControl('', [CustomValidators.creditCard]);

  constructor() {
    console.log(this.nameOfProduct);
  }

  ngOnInit(): void {}

  submitHandler() {
    console.log(this.creditCard);
  }
}
