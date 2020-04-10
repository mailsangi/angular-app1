import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit, OnDestroy {
  data;
  sub;
  constructor(private productService: ProductsService) {
    this.sub = this.productService.streamData();
    // .subscribe(data => {
    //   this.data = data;
    //   console.log(data);
    // });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
