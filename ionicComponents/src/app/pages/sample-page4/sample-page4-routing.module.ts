import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage4Page } from './sample-page4.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage4PageRoutingModule {}
