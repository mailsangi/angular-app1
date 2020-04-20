import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShowProducts } from './products/showproducts.guard';
import { HomeCanActivate } from './home/home.canactivate';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        canActivate: [HomeCanActivate],
        component: HomeComponent,
      },
      {
        path: 'home',
        canActivate: [HomeCanActivate],
        component: HomeComponent,
      },
      {
        path: 'products',
        canActivate: [ShowProducts],
        component: ProductsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
