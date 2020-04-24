import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShowProducts } from './products/showproducts.guard';
import { HomeCanActivate } from './home/home.canactivate';
import { ProductsCanDeActivate } from './products/products.candeactivate';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from './product/product.resolver';

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
        // canDeactivate: [ProductsCanDeActivate],
        component: ProductsComponent,
      },
      {
        path: 'product/:id/:price',
        resolve: {
          myproduct: ProductResolver,
        },
        data: {
          secretKey: '798t7e89t7e9t79e',
        },
        component: ProductComponent,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutes {}
