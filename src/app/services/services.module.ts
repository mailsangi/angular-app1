import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { WebdevComponent } from './webdev/webdev.component';
import { MobdevComponent } from './mobdev/mobdev.component';
import { CloudComponent } from './cloud/cloud.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ServicesComponent,
    WebdevComponent,
    MobdevComponent,
    CloudComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ServicesComponent,
        children: [
          {
            path: '',
            redirectTo: 'webdev',
            pathMatch: 'full',
          },
          {
            path: 'webdev',
            component: WebdevComponent,
          },
          {
            path: 'mobdev',
            component: MobdevComponent,
          },
          {
            path: 'cloud',
            component: CloudComponent,
          },
        ],
      },
    ]),
  ],
})
export class SerivcesModule {}
