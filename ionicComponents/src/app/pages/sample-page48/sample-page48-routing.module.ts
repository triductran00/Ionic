import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamplePage48Page } from './sample-page48.page';

const routes: Routes = [
  {
    path: '',
    component: SamplePage48Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplePage48PageRoutingModule {}
