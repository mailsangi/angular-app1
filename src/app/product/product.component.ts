import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/product.service';
import { switchMap } from 'rxjs/operators';
import { forkJoin, zip } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  data;
  product$;
  queryParams$;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {
    console.log('product constructor');

    // this.data = this.activatedRoute.snapshot.params;
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log('params', params);
    //   this.productService
    //     .getById(params.id)
    //     .subscribe((details) => console.log('Details', details));
    // });
    // this.product$ = this.activatedRoute.params.pipe(
    //   switchMap((params) => {
    //     return this.productService.getById(params.id);
    //   })
    // );
    this.queryParams$ = this.activatedRoute.queryParams;
    zip(this.queryParams$, this.activatedRoute.data).subscribe(
      (data) => {
        console.log('data', data);
        this.data = data[1].myproduct;
      },
      (err) => {
        console.log('err', err);
      }
    );

    // this.activatedRoute.data.subscribe((data) =>
    //   console.log('resolved data', data.myproduct)
    // );
  }

  ngOnInit(): void {
    console.log('Resolver oninit');
  }
}
