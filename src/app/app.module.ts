import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { CloudComponent } from './services/cloud/cloud.component';
import { WebdevComponent } from './services/webdev/webdev.component';
import { MobdevComponent } from './services/mobdev/mobdev.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    CloudComponent,
    WebdevComponent,
    MobdevComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'mobdev',
        component: MobdevComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          {
            path: '',
            redirectTo: 'webdev',
            pathMatch: 'full'
          },
          {
            path: 'webdev',
            component: WebdevComponent
          },
          {
            path: 'mobdev',
            component: MobdevComponent
          },
          {
            path: 'cloud',
            component: CloudComponent
          }
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
