import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShowProducts } from './products/showproducts.guard';
import { HomeCanActivate } from './home/home.canactivate';
import { ProductsCanDeActivate } from './products/products.candeactivate';

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
        canDeactivate: [ProductsCanDeActivate],
        component: ProductsComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
