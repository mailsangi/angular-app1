import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/products/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  products$;
  product = {
    name: 'Light',
    price: 10,
    _id: '9090909090',
  };
  constructor(
    private activatedR: ActivatedRoute,
    private router: Router,
    private productService: ProductsService,
    private cartService: CartService
  ) {
    this.products$ = this.router.url.includes('all')
      ? this.activatedR.parent.params.pipe(
          switchMap((params) => {
            console.log('Params', params);
            return this.productService.getParentCategoryItems(params.category);
          })
        )
      : this.activatedR.params.pipe(
          switchMap((params) => {
            console.log('Params', params);
            return this.productService.getSubCategoryItems(params.subcategory);
          })
        );
  }

  ngOnInit(): void {}

  addToCart(item: Product) {
    console.log('Product', item);
    // this.cartService.addProducts(item);
    this.cartService.products$.next(item);
  }
}
