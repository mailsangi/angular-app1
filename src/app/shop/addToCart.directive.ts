import { Directive, Input, HostListener } from '@angular/core';
import { CartService } from './cart.service';

@Directive({
  selector: '[addToCart]',
})
export class AddToCartDirective {
  @Input()
  product;
  constructor(private cartSerive: CartService) {}

  @HostListener('click')
  addToCart() {
    this.cartSerive.products$.next(this.product);
  }
}
