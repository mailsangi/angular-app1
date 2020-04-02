import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-mobdev',
  templateUrl: './mobdev.component.html',
  styleUrls: ['./mobdev.component.css']
})
export class MobdevComponent implements OnInit {
  products = [];
  constructor(private productService: ProductsService) {
    this.products = this.productService.products;
  }

  ngOnInit(): void {}
}
