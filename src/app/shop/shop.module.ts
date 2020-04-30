import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutes } from './shop.routes';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CategoryComponent } from './category/category.component';
import { AllComponent } from './all/all.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [ShopComponent, CategoryComponent, AllComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ShopRoutes,
    MatToolbarModule,
  ],
  // providers: [CartService],
})
export class ShopModule {}
