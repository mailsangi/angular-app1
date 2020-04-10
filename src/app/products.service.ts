import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [];
  constructor() {
    const products = localStorage.getItem('AppProducts');
    this.products = JSON.parse(products);
  }

  updateProducts(obj) {
    // this.products.push(obj);
    this.products = [...this.products, obj];
    localStorage.setItem('AppProducts', JSON.stringify(this.products));
  }

  streamData() {
    return Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1500);
    });
  }
}
