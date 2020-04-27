import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutes } from './shop.routes';

@NgModule({
  declarations: [ShopComponent],
  imports: [CommonModule, ShopRoutes],
})
export class ShopModule {}
