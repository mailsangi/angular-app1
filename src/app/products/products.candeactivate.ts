import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsCanDeActivate implements CanDeactivate<any> {
  canDeactivate() {
    console.log('lOgging from, can Deactivate');
    return false;
  }
}
