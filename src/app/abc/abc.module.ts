import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbcComponent } from './abc.component';
import { OneaComponent } from './onea/onea.component';
import { OnebComponent } from './oneb/oneb.component';
import { OnecComponent } from './onec/onec.component';

@NgModule({
  declarations: [AbcComponent, OneaComponent, OnebComponent, OnecComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AbcComponent,
        children: [
          {
            path: '',
            redirectTo: 'one',
            pathMatch: 'full',
          },
          {
            path: 'one',
            component: OneaComponent,
          },
          {
            path: 'two',
            component: OnebComponent,
          },
          {
            path: 'three',
            component: OnecComponent,
          },
        ],
      },
    ]),
  ],
})
export class ABCModule {}
