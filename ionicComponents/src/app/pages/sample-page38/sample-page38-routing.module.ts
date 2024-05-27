import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage38Page } from './sample-page38.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage38PageRoutingModule {}
