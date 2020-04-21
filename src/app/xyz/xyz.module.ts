import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { XyzComponent } from './xyz.component';
import { OnexComponent } from './onex/onex.component';
import { OneyComponent } from './oney/oney.component';
import { OnezComponent } from './onez/onez.component';

@NgModule({
  declarations: [XyzComponent, OnexComponent, OneyComponent, OnezComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: XyzComponent,
        children: [
          {
            path: '',
            redirectTo: 'one',
            pathMatch: 'full',
          },
          {
            path: 'one',
            component: OnexComponent,
          },
          {
            path: 'two',
            component: OneyComponent,
          },
          {
            path: 'three',
            component: OnezComponent,
          },
        ],
      },
    ]),
  ],
})
export class XYZModule {}
