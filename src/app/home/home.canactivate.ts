import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class HomeCanActivate implements CanActivate {
  constructor() {
    console.log('Logging from HomeCanActivate');
  }
  canActivate() {
    console.log('Logging from HomeCanActivate');

    const token = sessionStorage.getItem('token');
    // return token ? true : false;
    if (token) {
      return false;
    } else {
      return true;
    }
  }
}

// canActivate --- canDeactivate
