import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage13Page } from './sample-page13.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage13PageRoutingModule {}
