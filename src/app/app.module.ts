import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MobdevComponent } from './services/mobdev/mobdev.component';
import { SerivcesModule } from './services/services.module';
import { ABCModule } from './abc/abc.module';
import { XYZModule } from './xyz/xyz.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, AboutusComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'mobdev',
        component: MobdevComponent,
      },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'abc',
        loadChildren: () => {
          return import('./abc/abc.module').then((chunk) => {
            return chunk.ABCModule;
          });
        },
      },
      {
        path: 'xyz',
        loadChildren: () =>
          import('./xyz/xyz.module').then((chunk) => chunk.XYZModule),
      },
      {
        path: 'services',
        loadChildren: () =>
          import('./services/services.module').then(
            (chunk) => chunk.SerivcesModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
