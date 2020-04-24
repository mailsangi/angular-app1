import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from './products/product.service';
import { UserService } from './app/user.service';
import { ShowProducts } from './products/showproducts.guard';
import { HomeCanActivate } from './home/home.canactivate';
import { ProductsCanDeActivate } from './products/products.candeactivate';
import { ProductComponent } from './product/product.component';
import { ProductResolver } from './product/product.resolver';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, AppRoutes, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
  providers: [
    ProductsService,
    UserService,
    ShowProducts,
    HomeCanActivate,
    ProductsCanDeActivate,
    ProductResolver,
  ],
})
export class AppModule {}
