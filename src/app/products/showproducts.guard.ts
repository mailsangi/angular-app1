import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class ShowProducts implements CanActivate {
  constructor() {
    console.log('Logging from showProducts');
  }
  canActivate() {
    console.log('Logging from showProducts');

    const token = sessionStorage.getItem('token');
    // return token ? true : false;
    if (token) {
      return true;
    } else {
      return false;
    }
  }
}

// canActivate --- canDeactivate
