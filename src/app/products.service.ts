import { Injectable } from '@angular/core';

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
}
