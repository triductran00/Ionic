import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage18Page } from './sample-page18.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage18PageRoutingModule {}
