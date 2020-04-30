import { NgModule } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { AllComponent } from './all/all.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ShopComponent,
        children: [
          {
            path: ':category',
            component: CategoryComponent,
            children: [
              {
                path: '',
                redirectTo: 'all',
                pathMatch: 'full',
              },
              {
                path: 'all',
                component: AllComponent,
              },
              {
                path: ':subcategory',
                component: AllComponent,
              },
            ],
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ShopRoutes {}
