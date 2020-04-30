import { Injectable } from '@angular/core';
import { ShopModule } from './shop.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Product[] = [];
  products$ = new BehaviorSubject(null);
  constructor() {
    this.products$.subscribe((item) => {
      console.log('Item', item);
      if (item) {
        this.products.push(item);
      }
    });
  }
  addProducts(product: Product) {
    // this.products.push(product);
    this.products = [...this.products, product];
  }
}
