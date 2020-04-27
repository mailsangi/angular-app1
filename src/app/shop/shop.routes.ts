import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ShopRoutes {}
