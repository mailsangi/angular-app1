import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category/category.service';
import { map } from 'rxjs/operators';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  parentCatgories$;
  products: Product[] = [];
  constructor(
    private categoryService: CategoryService,
    private cartService: CartService
  ) {
    this.parentCatgories$ = this.categoryService.getAllParent();

    // setInterval(() => {
    //   this.products = this.cartService.products;
    // }, 1000);
    this.cartService.products$.subscribe((item) => {
      this.products = this.cartService.products;
    });
  }

  ngOnInit(): void {}
}
