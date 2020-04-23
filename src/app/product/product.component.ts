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
    // this.data = this.activatedRoute.snapshot.params;
    // this.activatedRoute.params.subscribe((params) => {
    //   console.log('params', params);
    //   this.productService
    //     .getById(params.id)
    //     .subscribe((details) => console.log('Details', details));
    // });
    this.product$ = this.activatedRoute.params.pipe(
      switchMap((params) => {
        return this.productService.getById(params.id);
      })
    );
    this.queryParams$ = this.activatedRoute.queryParams;
    forkJoin([this.product$, this.queryParams$]).subscribe(
      (data) => {
        console.log('data', data);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }

  ngOnInit(): void {}
}
