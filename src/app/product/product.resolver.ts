import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { of } from 'rxjs';
import { ProductsService } from '../products/product.service';

@Injectable()
export class ProductResolver implements Resolve<any> {
  constructor(private productService: ProductsService) {
    console.log('Resolver constructor');
  }

  resolve(routeSnapshot) {
    console.log('R snapshot', routeSnapshot);
    // const x = [1, 2, 3, 4, 5];
    // console.log('Resolver method');
    // return of(x);
    return this.productService.getById(routeSnapshot.params.id);
  }
}
