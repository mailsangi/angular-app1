import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css'],
})
export class ProductWidgetComponent implements OnInit {
  @Input()
  product;

  @Output()
  productClick = new EventEmitter();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  clickHandler() {
    console.log('From Click handler');
    this.productClick.emit(this.product);
  }
}
