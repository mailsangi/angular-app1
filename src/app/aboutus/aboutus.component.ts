import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from './../products.service';
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, OnDestroy {
  product = {
    name: '',
    price: ''
  };

  products = [];
  constructor(public productService: ProductsService) {
    // const products = localStorage.getItem('AppProducts');
    this.products = this.productService.products;
    console.log('logging from constructor');
  }

  ngOnInit() {
    console.log('Logging from onInit');
  }

  addProduct(pname, price) {
    // this.products.push(this.product);
    // this.products.push({ name: pname, price });
    this.productService.updateProducts({
      name: pname,
      price
    });
    this.products = [...this.products, { name: pname, price }];
  }

  ngOnDestroy() {
    console.log('Logging from on destroy');
  }
}
