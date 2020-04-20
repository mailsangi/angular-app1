import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegFormValue } from '../models/userRegFormValue';

const URL = 'http://localhost:9080/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  create(value: UserRegFormValue) {
    console.log('Value', value);
    return this.http.post(`${URL}/signup`, value);
  }

  signin(value: UserRegFormValue) {
    console.log('Value', value);
    return this.http.post(`${URL}/signin`, value);
  }
}
